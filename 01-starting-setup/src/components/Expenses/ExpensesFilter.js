import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const changeYearListHandler = (e) => {
    props.onSelectYear(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>년도 선택</label>
        <select value={props.selected} onChange={changeYearListHandler}>
          {props.yearOptions.map((v) =>
            <option key={v} value={v}>{v}</option>
          )}
        </select>
      </div>
    </div>
  )
};

export default ExpensesFilter;