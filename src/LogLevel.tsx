import React from 'react'

interface LogType{
    status : "Info" | "Warn" | "Error"
}

export default function LogLevel(props: LogType) {
  return (
    <div>{props.status}</div>
  )
}
