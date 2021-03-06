import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_DATA = [
  {
    id: 'e0',
    title: '쇼핑',
    amount: '90000',
    date: new Date(2022, 4, 9),
  },
  {
    id: 'e1',
    title: '장보기',
    amount: '30000',
    date: new Date(2022, 1, 10),
  }, {
    id: 'e2',
    title: '쇼핑',
    amount: '20000',
    date: new Date(2021, 5, 21),
  }, {
    id: 'e3',
    title: '외식',
    amount: '50000',
    date: new Date(2019, 6, 1),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  // const expenses = [
  //   {id: 'e1', title: '헬스장', amount: 20000, date: new Date(2022, 4, 3)},
  //   {id: 'e2', title: '쇼핑', amount: 100000, date: new Date(2022, 4, 7)},
  //   {id: 'e3', title: '장보기', amount: 30000, date: new Date(2022, 4, 9)},
  //   {id: 'e4', title: '야식', amount: 25000, date: new Date(2022, 4, 10)},
  // ];

  const addExpenseHandler = (expense) => {
    setExpenses((prevState => [expense, ...prevState ]));
  }

  // #1과 #2의 코드는 동일하게 동작된다!
  // #1
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );

  // #2 (React import가 필요하다)
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, {items: expenses})
  // )
}

export default App;
