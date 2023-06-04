## どんな時にサイレンダリングが起こるか

### stateが更新されたコンポーネント
- State とは・状態を表す！
- 状態が変更されたらレンダリングも起こる

### Propsが変更されたコンポーネント
- コンポーネントの引数であるPropsの値が変われば、レンダリングも起こる

### 再レンダリングされたコンポーネント配下のコンポーネント全て
- 親コンポーネントで再レンダリングが発生すると、その配下にある子コンポーネントが全て再レンダリングされてしまう

## 表示が変わらないのに毎回レンダリングをしてしまうと、パフォーマンスの低下を引き起こす

## -> レンダリングの最適化が必要
1.memo
2.useCallback
3.useMemo

### memo
### memo化とは、前回の処理結果を保持しておくことで処理を高速化する
- 親コンポーネントが再レンダリングしても、子コンポーネントの再レンダリングを防ぐことができる


```jsx
const Component = memo(() => {});
```
```jsx
import { useState, memo } from "react";

export const App = memo(() => {
  ...(親)
});

export const Child1 = memo(() => {
  ...(APPの子)
});
export const Child2 = memo(() => {
  ...(Child1の子)
});
export const Child3 = memo(() => {
  ...(Child1の子)
});
export const Child4 = memo(() => {
  ...(APPの子)
});
```


- コンポーネントは、Propsに変化がない限り、再レンダリングされない
### useCallback
### 関数のmemo化
- カウントアップの度にAppとChild1が再レンダリングしてしまう
- Propsが変更されているわけではないのに。。。。
### 関数の再生成が行われている
- 再レンダリング等でコードが実行されるたび、常に新しい関数が生成される。
```jsx
const onClickReset = () => {
  setNum(0);
};
```
- そのためPropsが変化したと判定

```jsx
const onClickButton = useCallback(() => {
  alert("ボタンが押されました！")
}, []);

const onClickReset = useCallback(() => {
  setNum(0);
}, []);
```

### useMemo
### 
- 




