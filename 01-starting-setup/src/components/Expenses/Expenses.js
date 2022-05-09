import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {
        props.items.map((v) => <ExpenseItem key={v.id} title={v.title} amount={v.amount} date={v.date}/>)
      }
    </Card>
  )
}

export default Expenses;