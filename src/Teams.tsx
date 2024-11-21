import React from 'react'

interface TeamsPropsType {
    IPL : string[]
}
export default function Teams(props:TeamsPropsType) {
  return (
    <div>
        {props.IPL.map((team,i)=><p>{team}</p>)}
    </div>
  )
}
