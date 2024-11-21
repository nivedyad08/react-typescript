import React, { useState } from 'react'

export default function SignIn() {
    // const [isSignIn, setSignIn] = useState(false) // Type Inference is working here 
    interface UserType {
      name : string,
      email: string
    }

    const [user, setUser] = useState<UserType | null>(null)

    const handleSignin = ()=>{
      setUser({
        name : "Nivedya",
        email: "nivedya.d@gmail.com"
      })
    }

    const handleSignout = ()=>{
      setUser(null)
    }

  return (
    <div>
        <button onClick={handleSignin}>Sign in</button>
        <button onClick={handleSignout}>Sign out</button>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
        {/* <div>{isSignIn ? "Sign In" : "Sign Out"}</div> */}
    </div>
  )
}
