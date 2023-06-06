import { useState } from 'react'



export const useFetchUsers = () => {
  const [useList, setUseList] = useState([{id: 1}])

  const onClickFetchUser = () => {
    alert('取得')
  }

  return { useList, onClickFetchUser }
}
