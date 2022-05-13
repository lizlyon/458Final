import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expenses";
import IncomeForm from "./IncomeForm";
import "./styles.css";
import styled from "styled-components";

export default function App() {
  const [income, setIncome] = useState(null);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (name, cost) => {
    setExpenses([
      ...expenses,
      {
        name,
        cost
      }
    ]);
  };

  // function that removes the expense based on index
  const removeExpense = (index) => {
    setExpenses(
      expenses.filter((expense, i) => {
        return index !== i;
      })
    );
  };

  // resset tehe income and expense back to null or an empty array
  const reset = () => {
    setIncome(null);
    setExpenses([]);
  };

  return (
    <Wrapper>
      <h1>Income and Expense Tracker</h1>
      <div>
        {income === null && (
          <IncomeForm onConfirm={(newIncome) => setIncome(newIncome)} />
        )}
        {income !== null && <span>${income}</span>}
        <ExpenseForm onConfirm={addExpense} />
        <Expenses expenses={expenses} onRemove={removeExpense} />
        {(income !== null || expenses.length > 0) && (
          <Button onClick={reset}>Reset All</Button>
        )}
        {(income !== null || expenses.length > 0) && (
          <div class="remaining">
            Remaining Income: $
            {income -
              expenses.reduce((acc, expense) => {
                return +expense.cost + acc;
              }, 0)}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    color: blue;
  }

  div {
    font-size: 25px;
    font-family: sans-serif;
  }

  .remaining {
  }
`;

const Button = styled.button`
  background: transparent;
  width: 100%;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: inherit;
  letter-spacing: inherit;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: lightcoral;
    color: black;
  }
`;
