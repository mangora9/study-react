import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData);
    setIsOpened(false);
  }
  const openExpenseFormHandler = () => {
    setIsOpened(true);
  }

  const closeExpenseFormHandler = () => {
    setIsOpened(false);
  }

  return (
    <>
      <div className="new-expense">
        {!isOpened && <button type='button' onClick={openExpenseFormHandler}>+</button> }
        {
          isOpened && <ExpenseForm onClose={closeExpenseFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>
        }
      </div>
    </>
  );
};

export default NewExpense;