"use client"


import { SignUp } from '@clerk/react'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      <SignUp />
    </main>
  )
}

export default SignUpPage
