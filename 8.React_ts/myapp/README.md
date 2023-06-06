## APIで取得するデータ型への方定義
```jsx
type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios.get("https://example.com/users").then((res) => {setUsers(res.data)});
  }, [])
  return (
    <div className="App">
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor}/>
      ))
      }
    </div>
  );
};
```

### 関数コンポーネントの型定義
### FCとVFCの違い・『FCは型定義に暗黙的にChildrenを含む。』『VFCは含まない。』

```jsx
import {FC} from "react";
import { User } from "../types/type";

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor } = props;
  return (
    <div>
      <p style={{color: personalColor}}>
      {id}: {name}({age})
      </p>
    </div>
  )
}
```

# もしAPI情報追加するとなれば
実行するまでhobbyが設定されるわからない場合
```jsx
export type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
  hobby?: string[];
}
```
