import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses() {
    const expense = [
        {title:'Car Insurance',date: new Date(),amount:'798.99'},
        {title:'House Rent',date: new Date(),amount:'399.99'},
        {title:'Laptop',date: new Date(),amount:'1298.99'},
        {title:'Toilet Paper',date: new Date(),amount:'16.99'},
    ]
  return (
    <div className="expenses">
      <ExpenseItem title={expense[0].title} date={expense[0].date} amount={expense[0].amount}/>
      <ExpenseItem title={expense[1].title} date={expense[1].date} amount={expense[1].amount}/>
      <ExpenseItem title={expense[2].title} date={expense[2].date} amount={expense[2].amount}/>
      <ExpenseItem title={expense[3].title} date={expense[3].date} amount={expense[3].amount}/>
    </div>
  );
}

export default Expenses;
