import React from 'react'
import { memo } from "react";

export const Child3 = memo(() => {
  console.log("Child3 レンダリング");

  return (
    <div style={style}>
      <p>Child3</p>
    </div>
  )
})

const style = {
  height: "50px",
  backgroundColor: "lightgray",
}