// export const ListItem = (props) => {
//   const { id, name, age } = props;
//   return (
//     <div>
//       {id}: {name}({age})
//     </div>
//   )
// }


type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
}

export const ListItem = (props: User) => {
  const { id, name, age, personalColor } = props;
  return (
    <div>
      <p style={{color: personalColor}}>
      {id}: {name}({age})
      </p>
    </div>
  )
}
