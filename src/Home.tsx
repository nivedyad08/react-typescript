import React from 'react'

interface PropsType {
    name :string,
    age : number,
    isEligible : boolean
}

// type PropsType = {
//   name :string,
//     age : number,
//     isEligible : boolean
// }

export default function Home(props: PropsType) {
  return (
    <>
      <div>Hey {props.name}, welcome</div>
      {props.isEligible ? <p>Your age is {props.age} and you are eligible to vote.</p> : <p>You cannot vote</p>}
    </>

  )
}
