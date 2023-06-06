import React from 'react'

export const ColoredMessage = (props) => {
  console.log(props);
  // { "color": "blue", "message": "お元気ですか？" }
  const { color, children } = props

  const contentStyle = {
    color: color,
    fontSize: "20px"
  };
  return (
    <>
    <p style={contentStyle}>{children}</p>
    </>
  )
}
