import { useState } from "react";
import { Card } from "./components/Card";



export const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const onnClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>管理者</span> : <span>管理者以外です</span>}
      <button onClick={onnClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};