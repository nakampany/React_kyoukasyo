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
改善前
![スクリーンショット 2023-06-04 午後16 51 58 午後](https://github.com/nakampany/React_kyoukasyo/assets/103278404/e42cfdd8-15bd-4dab-bfed-96c4684e8822)
→改善後
![スクリーンショット 2023-06-04 午後17 03 48 午後](https://github.com/nakampany/React_kyoukasyo/assets/103278404/f8138560-dfaf-4bf8-a23e-cd64fc2aa37d)

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
改善前
![スクリーンショット 2023-06-04 午後17 10 08 午後](https://github.com/nakampany/React_kyoukasyo/assets/103278404/1d062304-0f17-4622-aa4b-396bb4bf68ae)
→改善後
![スクリーンショット 2023-06-04 午後17 18 48 午後](https://github.com/nakampany/React_kyoukasyo/assets/103278404/4d8a44bb-538e-4ee3-a6be-d8e171cfd8d3)


### useMemo
### 変数のメモ化
- 『第一引数：関数に設定する値の返却』、『第二引数：依存配列』
- 『第二引数：依存配列』で　[]　とは、初回読み込まれた時のみ『１＋３』の計算を実行

```jsx
const sum = useMemo(() => {
  return 1+ 3;
}, []);
```

- 第二引数の count1 が変更された時に再評価され、表示が変わります。
```jsx
const sum = useMemo(() => {
  return count1 + count2;
}, [count1]);
```


