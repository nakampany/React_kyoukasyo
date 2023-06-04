## Propsのバケツリレー
### Propsが受け継がれていくのはしんどい。。。

## ContextでState管理
### React.createContextでContextの器を作成
```jsx
app/components/providers
の内にContextを保持するためのProviderコンポーネントを作成
```
```jsx
import { createContext } from 'react'

export const adminFlagContext = createContext();
```
### 作成したContextのProviderでグローバルStateを扱いたいコンポーネントを囲む

```jsx
import { createContext } from 'react'

export const AdminFlagContext = createContext();

export const AdminFlagProvider = props => {
  const { children } = props;

  //　動作確認用のサンプルオブジェクト
  const sampleObj = {sampleValue:"テスト"}

  return (
    <AdminFlagContext.Provider value={sampleObj}>
      {children}
    </AdminFlagContext.Provider>
  )
}
```
index.js
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AdminFlagProvider } from './components/providers/adminFlagProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AdminFlagProvider>
    <App />
    </AdminFlagProvider>
);
```

### Stateを参照したいコンポーネントでReact.useContextを使う
```jsx
import { useContext } from 'react'
import { AdminFlagContext } from './providers/AdminFlagProvider'

export const EditButton = (props) => {
  const { isAdmin } = props;

  const contextValue = React.useContext(AdminFlagContext);

  return (
    <div>
      <button style={style} disabled={isAdmin}>編集</button>
    </div>
  )
}
```