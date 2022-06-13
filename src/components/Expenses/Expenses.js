import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("");
  const selectYearHandler = (input) => {
    setYear(input.target.value);
  };
  console.log(year);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onSelectYear={selectYearHandler} />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
        {
          console.log(
            props.expenses.map((expense) => {
              return (
                <ExpenseItem
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              );
            })
          )
          /* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */
        }
      </Card>
    </div>
  );
};

export default Expenses;
