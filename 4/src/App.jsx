import { ColoredMessage } from "./components/ColoredMessage";


export const App = () => {
  return (
    <div>
      {/* {}の中はJSのコードが書ける */}
      {console.log("レンダリング")}
      <h1 style={{ color: "red" }}>こんにちは</h1>

      {/* {props.message} */}
      <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink" message="元気です！" />


      {/* {props.children} */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      {/* <button onClick={onClickButton}>ボタン</button> */}
    </div>
  );
};