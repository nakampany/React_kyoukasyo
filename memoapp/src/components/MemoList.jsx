import React from 'react'

export const MemoList = (props) => {
  const { memos, onClickDelete } = props
  return (
    <div>
      <h2>メモ一覧</h2>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <p>{memo}</p>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
