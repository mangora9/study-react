import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const yearList = [2019, 2020, 2021, 2022];

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((v) => v.date.getFullYear().toString() === filteredYear);
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} yearOptions={yearList} onSelectYear={selectYearHandler}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses;