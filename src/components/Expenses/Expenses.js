import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  //using state for filter year
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //showing relevant components on filtering year
  //.filter returns something for every element in array
  const filteredExpenses = props.items.filter((expense) => {
    let displayExpenses = expense.date.getFullYear().toString();
    if (displayExpenses === filteredYear) {
      return displayExpenses;
    } else {
      return false;
    }
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterYearHandler}
      />
      {/* if filtered expenses array does not have any elements , print error msg  */}
      {filteredExpenses.length === 0 && (
        <p className="no-expenses">Oops ! No Entry Found</p>
        )}
      {/* if filtered expenses array contains element , print it into dom */}
      {/* .map takes a function which is repeated for all elements in array */}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((elem) => {
          return (
            <ExpenseItem
              key={elem.id}
              title={elem.title}
              amount={elem.amount}
              date={elem.date}
            />
          );
        })}
    </div>
  );
}

export default Expenses;
