import { ChangeEvent, useCallback, useState } from "react";
import { MemoList } from "./components/MemoList";


export const App = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text); //　ここで入力された文字が表示される
  }
  const onClickHandler = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
    console.log(memos); //　ここでmemo[]が表示される
  }
  // useCallbackを使うことで、関数の再生成を防ぐことができ、MemoListコンポーネントの再描画を防ぐことができる
  const onClickDelete = useCallback((index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1); // 配列から要素を削除する (削除する位置, 削除する要素の数)
    setMemos(newMemos);
  }, [memos]);
  // const onClickDelete = (index: number) => {
  //   const newMemos = [...memos];
  //   newMemos.splice(index, 1); // 配列から要素を削除する (削除する位置, 削除する要素の数)
  //   setMemos(newMemos);
  // };


  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText}/>
      <button onClick={onClickHandler}>追加</button>
      <MemoList memos={memos} onClickDelete={onClickDelete}/>
    </div>
  );
};

