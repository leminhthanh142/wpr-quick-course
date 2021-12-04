/* eslint-disable no-param-reassign */
import styled from "styled-components/macro";
import React from "react";
import { centerItem } from "../../../../shared/centerItemStyle";

interface schema{
 count:number;
 onDecrease:any;
 onIncrease:any;
}

const Counter = ({ count, onDecrease, onIncrease }:schema) => (
  <Container>
    <div className="cover">
      <button onClick={onDecrease}>-</button>
      <span className="currentValue">{count}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  </Container>
);
export default Counter;
const Container = styled.div`
  ${centerItem()}
  text-align: center;
  .cover{
    ${centerItem()}
    button {
      background: white;
      padding: 4px 10px;
      border:1px solid #ddd;
    }
    .currentValue {
      padding: 4px 10px;
      background: white;
      border:1px solid #ddd;
    }
  } 
`;
