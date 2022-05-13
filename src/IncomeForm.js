import { useState } from "react";
import styled from "styled-components";

export default function IncomeForm({ onConfirm }) {
  const [income, setIncome] = useState(); // may need to add a 0 back in

  const onConfirmMe = (e) => {
    e.preventDefault();
    onConfirm(income);
  };

  return (
    <Form onSubmit={onConfirmMe}>
      <input
        value={income}
        placeholder="enter monthly income"
        onChange={(e) => setIncome(e.target.value)}
      />
      <Spacer width={80} />
      <Button>Submit</Button>
    </Form>
  );
}

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

const Spacer = styled.div`
  width: ${(p) => p.width}px;
`;

const Button = styled.button`
  background: transparent;
  width: 25%;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: inherit;
  letter-spacing: inherit;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: lightcoral;
    color: black;
  }
`;
