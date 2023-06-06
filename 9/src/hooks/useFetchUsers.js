import { useState } from 'react'
import axios from 'axios'



export const useFetchUsers = () => {
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return { userList, onClickFetchUser, isLoading, isError }
}
