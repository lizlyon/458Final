import { useState } from "react";
import styled from "styled-components";

// function to add the expenses and costs
export default function ExpenseForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(); // you may need to put a 0 as an argument

  const onConfirmMe = (e) => {
    e.preventDefault();
    onConfirm(name, cost);
    setName("");
    setCost(0);
  };

  return (
    <Form onSubmit={onConfirmMe}>
      <input
        value={name}
        placeholder="enter an expense"
        onChange={(e) => setName(e.target.value)}
      />
      <Spacer width={80} />
      <input
        type="number"
        placeholder="enter a cost"
        step="0.01"
        min="0.01"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <Spacer width={80} />
      <Button>Add</Button>
    </Form>
  );
}

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

const Spacer = styled.div`
  width: ${(p) => p.width}px;
`;

const Form = styled.form`
  font-size: 1.4rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  padding: 10px;

  input {
    font-size: 1rem;
    padding: 10px;
    border-radius: 10px;
  }
`;
