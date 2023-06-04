import React from 'react'

export const EditButton = (props) => {
  const { isAdmin } = props;
  return (
    <div>
      <button style={style} disabled={isAdmin}>編集</button>
    </div>
  )
}

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
}
