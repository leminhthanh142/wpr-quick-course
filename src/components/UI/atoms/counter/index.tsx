import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components/macro";

export const Counter = () => {
  const [count, setCount] = useState<number>(1);
  const handleDecrease = () => setCount(count - 1);
  const handleIncrease = () => setCount(count + 1);
  useLayoutEffect(() => {
    if (count <= 0) setCount(1);
  }, [count]);

  return (
    <Container>
      <button onClick={handleDecrease}>-</button>
      <span className="currentValue">{count}</span>
      <button onClick={handleIncrease}>+</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  text-align: center;
  & button {
    background: white;
    padding: 3px 6px;
    border: none;
  }
  & .currentValue {
    width: 50px;
    padding: 5px;
    background: white;
    margin: 0 5px;
  }
`;
