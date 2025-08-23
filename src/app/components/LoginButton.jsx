"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { doSocialLogin } from '../actions'


export default function LoginButton() {
  return (
    <form action={doSocialLogin}>
        <button className='btn' type='submit' name='action' value='google'>Login</button>
    </form>
  )
}
