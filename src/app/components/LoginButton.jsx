"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


export default function LoginButton() {
  return (
    <div>
        <button className='btn' onClick={()=>signIn()}>Login</button>
    </div>
  )
}
