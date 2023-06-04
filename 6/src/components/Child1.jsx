import React from 'react'
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { memo } from "react";

export const Child1 = memo((props) => {
  console.log("Child1 レンダリング");

  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>Child1</p>
      <button onClick={onClickReset}>リセット</button>
      <Child2 />
      <Child3 />
    </div>
  )
});

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "20px",
};
