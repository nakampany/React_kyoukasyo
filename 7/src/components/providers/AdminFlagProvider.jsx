import { createContext, useState } from 'react'

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;

  const [isAdmin, setIsAdmin] = useState(false);

  // //　動作確認用のサンプルオブジェクト
  // const sampleObj = {sampleValue:"テスト"}

  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  )
}
