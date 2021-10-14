import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseInput.css";

function ExpenseInput(props) {
  const saveExpenseDataHandler = (expenseData) => {
    const expenseObj = {
      ...expenseData,
      id: Math.random().toString(),
    };

    //traversing upwards
    props.onAddExpenseData(expenseObj);
  };

  //showing forms
  const [showForm , setShowForm] = useState(false);

  const notShowingForm = () => {
    setShowForm(false);
  }

  const showingForm = () => {
    setShowForm(true);
  }
  

  return (
    <div className="expense-input">
      {showForm === false && <button className='go-to-expense-form' onClick={showingForm}>Add Your Expense Here</button>}
      {showForm === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={notShowingForm}/>}
    </div>
  );
}

export default ExpenseInput;
