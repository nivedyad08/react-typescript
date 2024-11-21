import React from 'react'

interface childPropType{
    children : React.ReactNode
}

export default function Parent(props: childPropType) {
  return (
    <div>{props.children}</div>
  )
}
