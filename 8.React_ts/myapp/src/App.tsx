// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { ListItem } from './components/ListItem';



// export const App = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     axios.get("https://example.com/users").then((res) => {setUsers(res.data)});
//   }, [])
//   return (
//     <div className="App">
//       {users.map(user => (
//         <ListItem id={user.id} name={user.name} age={user.age}/>
//       ))
//       }
//     </div>
//   );
// };

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListItem } from './components/ListItem';
import { User } from './types/type';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios.get("https://example.com/users").then((res) => {setUsers(res.data)});
  }, [])
  return (
    <div className="App">
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} hobby={user
        .hobby}/>
      ))
      }
    </div>
  );
};

