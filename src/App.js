import Expenses from './components/Expenses/Expenses';
import ExpenseInput from './components/ExpenseInput/ExpenseInput';
import './App.css'
import { useState } from 'react';


const DUMMY_EXPENSES = [
  {id:'e1',title:'Car Insurance',date: new Date('8/28/19'),amount:'798.99'},
  {id:'e2',title:'House Rent',date: new Date('6/08/20'),amount:'399.99'},
  {id:'e3',title:'Laptop',date: new Date(),amount:'1298.99'},
  {id:'e4',title:'Toilet Paper',date: new Date(),amount:'16.99'},
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
