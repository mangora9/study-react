import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const [amount, setAmount] = useState('');
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  }

  const [date, setDate] = useState('');
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpenseData({
      title,
      amount,
      date: new Date(date),
    });
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>내용</label>
          <input type='text' value={title} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>가격</label>
          <input type='number' value={amount} min='0' step='1' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>날짜</label>
          <input type='date' value={date} min='2020-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>추가</button>
      </div>
    </form>
  )
};

export default ExpenseForm;