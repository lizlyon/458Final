import styled from "styled-components";

// function that will output the expenses
export default function Expenses({ expenses, onRemove }) {
  return expenses.map((expense, index) => {
    return (
      <Wrapper>
        <div class="list">
          {expense.name} - ${expense.cost}
          <button onClick={() => onRemove(index)}>x</button>
        </div>
      </Wrapper>
    );
  });
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  /* align-items: center; */
  padding: 10px;

  button {
    position: absolute;
    right: 420px;
    background: transparent;
    width: 10%;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 500;
    text-transform: inherit;
    letter-spacing: inherit;
    padding: 2px;
    cursor: pointer;

    &:hover {
      background-color: lightcoral;
      color: black;
    }
  }
`;

// const Button = styled.button`
//   background: transparent;
//   width: 10%;
//   border-radius: 20px;
//   font-size: 1rem;
//   font-weight: 500;
//   text-transform: inherit;
//   letter-spacing: inherit;
//   padding: 2px;
//   cursor: pointer;

//   &:hover {
//     background-color: lightcoral;
//     color: black;
//   }
// `;

// const Spacer = styled.div`
//   width: ${(p) => p.width}px;
// `;
