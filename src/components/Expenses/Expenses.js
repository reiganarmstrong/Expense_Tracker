import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
const Expenses = (props) => {
  const [year, setYear] = useState("2022");
  const selectYearHandler = (input) => {
    setYear(input.target.value);
  };
  const filteredList = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onSelectYear={selectYearHandler} />
        <ExpenseChart expenses={filteredList} />
        <ExpensesList expenses={filteredList} />
      </Card>
    </div>
  );
};

export default Expenses;
