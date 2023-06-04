import React from 'react'
import { memo } from "react";

export const Child4 = memo(() => {
  console.log("Child4 レンダリング");
  return (
    <div style={style}>
      <p>Child4</p>
    </div>
  )
})

const style = {
  height: "200px",
  backgroundColor: "wheat",
  padding: "20px",
}