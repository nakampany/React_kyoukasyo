import { useContext } from 'react'
import { AdminFlagContext } from './providers/AdminFlagProvider'

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <div>
      <button style={style} disabled={!isAdmin}>
        編集
      </button>
    </div>
  )
}

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
}
