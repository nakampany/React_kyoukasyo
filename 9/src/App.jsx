import './App.css';
import { useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [userList, setUserList] = useState([]);
  const [Loading, setIsLoading] = useState(false);
  const [IsError, setIsError] = useState(false);

  const onClickFetchUser = () => {
    setIsLoading(true);
    setIsError(false);

    axios.get("https://example.com/users")
    .then(result => {
      const users = result.data.map(user => ({
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        age: user.age,
      }));
      setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
    };
  

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>データの取得に失敗しました。</p>}
      {isLoading ? (
        <p>Loading...</p>
      ):(
        userList.map(() => (
          <p key={user.id}>{user.name}({user.age}歳)</p>
        ))
      )}
    </div>
  );
};

// import './App.css';
// import { useState } from 'react';
// import axios from 'axios';

// export const App = () => {
//   const [userList, setUserList] = useState([]);
//   const [Loading, setIsLoading] = useState(false);
//   const [IsError, setIsError] = useState(false);

//   const onClickFetchUser = () => {
//     setIsLoading(true);
//     setIsError(false);

//     axios.get("https://example.com/users")
//     .then(result => {
//       const users = result.data.map(user => ({
//         id: user.id,
//         name: `${user.first_name} ${user.last_name}`,
//         age: user.age,
//       }));
//       setUserList(users);
//       })
//       .catch(() => setIsError(true))
//       .finally(() => setIsLoading(false));
//     };
  

//   return (
//     <div className="App">
//       <button onClick={onClickFetchUser}>ユーザー取得</button>
//       {isError && <p style={{ color: "red" }}>データの取得に失敗しました。</p>}
//       {isLoading ? (
//         <p>Loading...</p>
//       ):(
//         userList.map(() => (
//           <p key={user.id}>{user.name}({user.age}歳)</p>
//         ))
//       )}
//     </div>
//   );
// };