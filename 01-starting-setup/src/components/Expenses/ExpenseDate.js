import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear() + '년';
  const month = props.date.toLocaleString('ko-KR', {month: 'long'});
  const date = props.date.toLocaleString('ko-KR', {day: '2-digit'});

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  )
}

export default ExpenseDate;