import Expenses from './components/Expenses/Expenses';
import ExpenseInput from './components/ExpenseInput/ExpenseInput';
import './App.css'
import { useState } from 'react';


const DUMMY_EXPENSES = [
  {id:'e1',title:'Car Insurance',date: new Date('2/28/19'),amount:'798.99'},
  {id:'e2',title:'House Rent',date: new Date('10/08/20'),amount:'399.99'},
  {id:'e3',title:'Laptop',date: new Date('5/24/21'),amount:'700.99'},
  {id:'e4',title:'Toilet Paper',date: new Date('9/21/21'),amount:'160.99'},
  {id:'e5',title:'Wooden Desk',date: new Date('2/21/21'),amount:'499.99'},
  {id:'e6',title:'Groceries',date: new Date('6/21/21'),amount:'200'},
  {id:'e7',title:'Repaired Mobile',date: new Date('11/21/21'),amount:'649.99'},
];

function App() {

//usimg state for array
const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseDataHandler = (expenseData) => {
  setExpenses((prevExpenses) => {
    return [expenseData,...prevExpenses];
  });

}
  return (
    <div className="App">
      <ExpenseInput onAddExpenseData={addExpenseDataHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
