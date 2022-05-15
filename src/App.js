import { useState } from "react";
import ExpenseForm from "..components/ExpenseForm";
import Expenses from "..components/Expenses";
import IncomeForm from "..components/IncomeForm";
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
      <Border>
        <h2>Welcome (user.email) </h2>
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
      </Border>
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
    font-family: "Roboto", sans-serif;
  }

  div {
    font-size: 25px;
    font-family: sans-serif;
  }
`;

const Border = styled.div`
  background-color: lightcyan;
  color: black;
  height: min(90%, 900px);
  width: auto;
  border-radius: 20px 20px 20px 20px;
  padding: 10px 10px 10px 10px;

  .remaining {
    position: absolute;
    top: 165px;
    right: 350px;
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
