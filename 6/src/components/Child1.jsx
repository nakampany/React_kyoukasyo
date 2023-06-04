import React from 'react'
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
import { memo } from "react";

export const Child1 = memo(() => {
  console.log("Child1 レンダリング");

  return (
    <div style={style}>
      <p>Child1</p>
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
