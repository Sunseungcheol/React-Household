import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { ImPencil } from 'react-icons/im';
import { useHouseholdDispatch } from './HouseholdContext';
import Dialog from '../Dialog';
import useInputs from './useInputs';

const icons = css`
  display: flex;
  align-items: center;
  margin-left: 10px;
  justify-content: center;
  color: #727258;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

const HouseholdItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
  }
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;

const Price = styled.div`
  flex: 1;
  font-size: 21px;
  color: #c96a6a;
  span {
    font-size: 17px;
  }
`;

const Category = styled.div`
  font-size: 18px;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: ${props => props.category};
  border-radius: 3px;
  color: white;
`;

const Remove = styled.div`
  ${icons}
`;
const Edit = styled.div`
  ${icons}
  font-size: 20px;
`;

const boxStyle = css`
  width: 100%;
  padding: 10px;
  margin: 7px 0;
  border: 1px solid #6b616e;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  border-radius: 3px;
`;
const Select = styled.select`
  ${boxStyle}
`;
const Input = styled.input`
  ${boxStyle}
`;
//카테고리별 색상
const categoryColor = category => {
  switch (category) {
    case 'meal': {
      return '#1376be';
    }
    case 'bmw': {
      return '#1a6e3b';
    }
    case 'hospital': {
      return '#a84c45';
    }
    default:
      return 'white';
  }
};
function HouseholdItem({ id, title, category, text, amount }) {
  //삭제버튼 다이얼로그
  const [deleteDialog, setDeleteDialog] = useState(false);
  const onDeletClick = () => {
    setDeleteDialog(true);
  };
  const onDeletConfirm = () => {
    onRemove();
    setDeleteDialog(false);
  };
  const onDeletCancle = () => {
    setDeleteDialog(false);
  };

  //수정버튼 다이얼로그
  const [editDialog, setEditDialog] = useState(false);
  const onEditClick = () => {
    setEditDialog(true);
  };
  const onEditCancle = () => {
    setInputs({
      id: id,
      category: category,
      text: text,
      amount: amount,
    });
    setEditDialog(false);
  };
  // const [inputs, setInputs] = useState({
  //   id: id,
  //   category: 'meal',
  //   text: text,
  //   amount: Number(amount),
  // });

  const [inputs, setInputs, onChange, onlyNumber] = useInputs({
    id: id,
    category: category,
    text: text,
    amount: amount,
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(inputs.category, inputs.text, inputs.amount);
    if (!inputs.text || !inputs.amount) {
      alert('값을 확인해 주세요.');
      return;
    }
    dispatch({
      type: 'EDIT',
      household: {
        id: id,
        category: inputs.category,
        text: inputs.text,
        //잊지말고 넘버로 보낼것
        amount: Number(inputs.amount),
      },
    });
    setInputs({
      id: id,
      category: category,
      text: text,
      amount: amount,
    });
    setEditDialog(false);
  };

  const dispatch = useHouseholdDispatch();
  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  };
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <>
      <HouseholdItemBlock>
        <Category category={categoryColor(category)}>{title}</Category>
        <Text>{text}</Text>
        <Price>
          {numberWithCommas(amount)} <span>원</span>
        </Price>
        <Edit>
          <ImPencil onClick={onEditClick}></ImPencil>
        </Edit>
        <Remove>
          <MdDelete onClick={onDeletClick}></MdDelete>
        </Remove>
      </HouseholdItemBlock>

      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        visible={deleteDialog}
        onConfirm={onDeletConfirm}
        onCancle={onDeletCancle}
      >
        정말로 삭제하시겠습니까
      </Dialog>
      <form onSubmit={onSubmit}>
        <Dialog
          title="수정하시겠습니까?"
          confirmText="수정"
          cancelText="취소"
          visible={editDialog}
          onCancle={onEditCancle}
        >
          <Select
            name="category"
            onChange={onChange}
            autoFocus
            defaultValue={category}
          >
            <option value="meal">식사</option>
            <option value="bmw">교통</option>
            <option value="hospital">병원</option>
          </Select>
          <Input
            type="text"
            name="text"
            placeholder="내용"
            onChange={onChange}
            defaultValue={text}
          />
          <Input
            type="text"
            name="amount"
            placeholder="가격"
            onChange={onChange}
            onKeyPress={onlyNumber}
            defaultValue={amount}
          />
        </Dialog>
      </form>
    </>
  );
}

export default React.memo(HouseholdItem);
