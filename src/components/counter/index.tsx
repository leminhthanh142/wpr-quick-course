import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

export const Counter = () => {
  const [count, setCount] = useState<number>(1);
  const handleDecrease = () => setCount((prev) => prev - 1);
  const handleIncrease = () => setCount((prev) => prev + 1);
  return (
    <Container>
      <span onClick={handleDecrease}>-</span>
      <span className="choosingAmount">{count}</span>
      <span onClick={handleIncrease}>+</span>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  & span {
    background: white;
    padding: 3px 6px;
  }
  & .choosingAmount {
    width: 50px;
  }
`;
