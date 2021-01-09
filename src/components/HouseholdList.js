import React, { useState } from 'react';
import styled from 'styled-components';
import { useHouseholdState } from './HouseholdContext';
import HouseholdItem from './HouseholdItem';

const HouseholdListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
  background-color: #f1e1e1d6;
`;

const CategorySelectBlock = styled.div`
  padding: 18px 32px;
  border-bottom: 1px solid #dedede;

  display: flex;
  justify-content: flex-end;
  p {
    margin-right: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  select {
  }
`;

const changeTitle = category => {
  switch (category) {
    case 'meal':
      return '식사';
    case 'bmw':
      return '교통';
    case 'hospital':
      return '병원';
    default:
      return '설정안됨';
  }
};
function HouseholdList() {
  const households = useHouseholdState();
  const [selectName, setSelectName] = useState('all');
  const selectRerender = e => {
    e.preventDefault();
    return setSelectName(e.target.value);
  };
  return (
    <>
      <CategorySelectBlock>
        <p>카테고리</p>
        <select name="Category" id="Category" onChange={selectRerender}>
          <option value="all">전체</option>
          <option value="meal">식사</option>
          <option value="bmw">교통</option>
          <option value="hospital">의료</option>
        </select>
      </CategorySelectBlock>
      <HouseholdListBlock>
        {households
          .filter(
            household =>
              selectName === 'all' || household.category === selectName
          )
          .map(household => (
            <HouseholdItem
              key={household.id}
              id={household.id}
              title={changeTitle(household.category)}
              category={household.category}
              text={household.text}
              amount={household.amount}
            ></HouseholdItem>
          ))}
        {/* {households.map(household =>
          selectName === 'all' ? (
            <HouseholdItem
              key={household.id}
              id={household.id}
              title={changeTitle(household.category)}
              category={household.category}
              text={household.text}
              amount={household.amount}
            ></HouseholdItem>
          ) : household.category === selectName ? (
            <HouseholdItem
              key={household.id}
              id={household.id}
              title={changeTitle(household.category)}
              category={household.category}
              text={household.text}
              amount={household.amount}
            ></HouseholdItem>
          ) : (
            ''
          )
        )} */}
      </HouseholdListBlock>
    </>
  );
}

export default HouseholdList;
