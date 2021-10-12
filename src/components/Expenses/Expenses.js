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

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterYearHandler}
      />
      {/* .map takes a function which is repeated for all elements in array */}
      {props.items.map((elem) => {
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
