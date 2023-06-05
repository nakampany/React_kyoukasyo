// export const ListItem = (props) => {
//   const { id, name, age } = props;
//   return (
//     <div>
//       {id}: {name}({age})
//     </div>
//   )
// }

import {FC} from "react";
import { User } from "../types/type";

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor, hobby } = props;
  return (
    <div>
      <p style={{color: personalColor}}>
      {id}: {name}({age}) {hobby?.join("/")}
      </p>
    </div>
  )
}
