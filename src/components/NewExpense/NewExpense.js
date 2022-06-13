import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const [addExpense, setAddExpense] = useState(true);
  if (!addExpense) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => {
            return setAddExpense(true);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={() => setAddExpense(false)}>Add New Expense</button>
      </div>
    );
  }
};

export default NewExpense;
