import React from 'react'
import { EditButton } from './EditButton'

export const Card = (props) => {
  const { isAdmin } = props;
  return (
    <div style={style}>
      <p>山田</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  )
}
const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#ddd",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}