import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import Dialog from '../Dialog';
import { useHouseholdDispatch, useHouseholdNextId } from './HouseholdContext';

const CircleBtn = styled.button`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 80px;
  height: 80px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 40px;
  border: none;
  outline: none;

  z-index: 5;
  cursor: pointer;
  background-color: #38d9a9;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }

  transition: all 0.3s;
  ${props =>
    props.dialog &&
    css`
      background-color: #ff6b6b;
      &:hover {
        background-color: #ff8787;
      }
      &:active {
        background-color: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `};
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

function HouseholdCreate() {
  const [dialog, setDialog] = useState(false);
  const dispatch = useHouseholdDispatch();
  const nextId = useHouseholdNextId();

  const [inputs, setInputs] = useState({
    id: 0,
    category: 'meal',
    text: '',
    amount: 0,
  });

  const { category, text, amount } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      household: {
        id: nextId.current,
        category: category,
        text: text,
        //잊지말고 넘버로 보낼것
        amount: Number(amount),
      },
    });

    setInputs({
      category: 'meal',
    });
    setDialog(false);
    nextId.current += 1;
  };

  const onToggle = () => {
    setDialog(!dialog);
  };
  const onCancle = () => {
    setDialog(false);
  };

  return (
    <>
      <CircleBtn onClick={onToggle} dialog={dialog}>
        <MdAdd></MdAdd>
      </CircleBtn>
      <Dialog
        title={'입력 후 확인을 누르세요'}
        visible={dialog}
        onConfirm={onSubmit}
        onCancle={onCancle}
      >
        <form>
          <Select name="category" onChange={onChange}>
            <option value="meal">식사</option>
            <option value="bmw">교통</option>
            <option value="hospital">의료</option>
          </Select>
          <Input
            type="text"
            name="text"
            placeholder="내용"
            onChange={onChange}
          />
          <Input
            type="text"
            name="amount"
            placeholder="가격"
            onChange={onChange}
          />
        </form>
      </Dialog>
    </>
  );
}

export default HouseholdCreate;
