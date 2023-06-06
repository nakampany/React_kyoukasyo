## jsはキャメルケース

### propsを受け取った時に、毎回props.〜とは書きたくない。面倒
```js
const { color, children } = props
```

## useState
### 可変の状態を全てStateとして管理
```js

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
    setNum((prev) => prev + 1);
  }

  (
  <button onClick={onClickButton}>ボタン</button>
  <p>{num}</p>
  )

```

## 再レンダリングと副作用
### ボタンを押してStateをカウントアップした時、画面をリロードしているわけではないのに、数値が変わった　→ コンポーネントが再レンダリングされた

## useEffect
### ある値が変わった時に、ある処理を実行する
- コンポーネントは、再レンダリングを繰り返している
- Stateの数が多くなると、再レンダリングの回数も増える
### 『再レンダリングのたびにこの処理を実行するのは、コスト（時間）が無駄にかかるから、この値だけ再レンダリングさせたいな』という場面で活躍！！
```js
import { useEffect } from "react";

useEffect(実行する関数, [依存する値])；
```

![スクリーンショット 2023-06-03 午後13 56 54 午後](https://github.com/nakampany/React_kyoukasyo/assets/103278404/831b8ed2-8abe-42d4-8a14-eb40806d5025)



## export について

### 結論：　named export を使うべき
```js
export const Tom = () => <>Tom</>

import { Tom } from './tom'
```

### export defaultは使わないほうがいい
- import 側の裁量で対象を自由に命名できてしまう
```js
export default () => <>Tom</>

import Tom from './tom'
```
