import { useState, memo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";


export const App = memo(() => {
  console.log("App レンダリング")
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num+1);
  }

  return (
    <div>
      <button onClick={onClickButton}>ボタン</button>
      <p></p>
      <Child1 />
      <Child4 />
    </div>
  );
});