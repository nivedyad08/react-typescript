import React from 'react'

interface PersonDetailsProps{
    Details : PersonDetailsType,
    IPLProps : TeamsPropsType[]
}
interface PersonDetailsType {
        Fname : string,
        Lname :string,
        age : number,
        isVegan : boolean 
}

type TeamsPropsType = {
        team : string,
        Clr : string
}

export default function PersonDetails({Details,IPLProps}: PersonDetailsProps) {
  return (
    <div>
        <div>First Name - {Details.Fname}</div>
        <div>Last Name - {Details.Lname}</div>
        <div>Age - {Details.age}</div>
        <div>{Details.isVegan ?<p>He is Vegan</p> : <p>He is not Vegan</p>}</div>

        <div>{IPLProps.map((team)=>(<div>{team.team} {team.Clr}</div> ))}</div>
    </div>
  )
}
