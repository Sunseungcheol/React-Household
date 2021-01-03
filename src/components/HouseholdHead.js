import React from 'react';
import styled from 'styled-components';
import { useHouseholdState } from './HouseholdContext';

const HouseholdHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #dedede;

  h1 {
    margin: 0;
    font-size: 27px;
    color: #35548e;
  }
  p {
    font-size: 20px;
    margin-top: 20px;
  }
  span {
    font-size: 22px;
    color: #f37b7b;
  }
  .total-expense {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #865487;
  }
`;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function HouseholdHead() {
  const household = useHouseholdState();
  const amountTotal = household.reduce((preValue, currentValue) => {
    //return preValue.amount + currentValue.amount 이거 안됨 오류
    return preValue + currentValue.amount;
  }, 0);
  console.log(amountTotal);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <HouseholdHeadBlock>
      <h1>오늘의 지출</h1>
      <p>{dateString}</p>
      <div className="total-expense">
        총 지출 : <span>{numberWithCommas(amountTotal)} </span>원
      </div>
    </HouseholdHeadBlock>
  );
}

export default HouseholdHead;
