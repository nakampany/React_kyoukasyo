import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  
  const onnClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>管理者</span> : <span>管理者以外です</span>}
      <button onClick={onnClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};