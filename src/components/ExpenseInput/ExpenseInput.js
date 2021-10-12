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
  return (
    <div className="expense-input">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default ExpenseInput;
