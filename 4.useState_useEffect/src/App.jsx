import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";


export const App = () => {
  console.log("レンダリング")
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
    // setNum((prev) => prev + 1);
  }
  return (
    <div>
      {/* {}の中はJSのコードが書ける */}
      <h1 style={{ color: "red" }}>こんにちは</h1>

      {/* {props.message} */}
      {/* <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink" message="元気です！" /> */}


      {/* {props.children} */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
};