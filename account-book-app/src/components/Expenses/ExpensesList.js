import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>등록된 데이터가 없습니다.</h2>;
  }
  return (
    <>
      <ul className='expenses-list'>
        {
          props.items.map((v) =>
            <ExpenseItem key={v.id.toString()} title={v.title} amount={v.amount} date={v.date}/>
          )
        }
      </ul>
    </>
  );
};

export default ExpensesList;