import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const yearList = [2019, 2020, 2021, 2022];

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} yearOptions={yearList} onSelectYear={selectYearHandler}/>
      {
        props.items.map((v) => <ExpenseItem key={v.id} title={v.title} amount={v.amount} date={v.date}/>)
      }
    </Card>
  )
}

export default Expenses;