import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  //using state to store values of user input
  //unique state for every form field
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //change in state handlers
  function changeTitleHandler(e) {
    setEnteredTitle(e.target.value);
  }

  function changeAmountHandler(e) {
    setEnteredAmount(e.target.value);
  }

  function changeDateHandler(e) {
    setEnteredDate(e.target.value);
  }

  //form submit handler
  function formHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //traversing upwards
    props.onSaveExpenseData(expenseData);

    //clearing input fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  //attaching change in state listeners in JSX
  return (
    <div className="expense-form">
      <form onSubmit={formHandler}>
        <div className="title-input-wrap">
          <label>Title : &nbsp;</label>
          <input
            type="text"
            id="title-input"
            required
            value={enteredTitle}
            autoComplete="off"
            onChange={changeTitleHandler}
          />
        </div>
        <div className="amount-input-wrap">
          <label>Amount : &nbsp;</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount-input"
            required
            value={enteredAmount}
            autoComplete="off"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="date-input-wrap">
          <label>Date : &nbsp;</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date-input"
            required
            value={enteredDate}
            autoComplete="off"
            onChange={changeDateHandler}
          />
        </div>
        <button type="button" className="cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className="add-expense-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
