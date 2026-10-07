"use client"

import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { Show } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Th3e Home page here</h1>
      
      <Show when="signed-in">
        Signed in content
        <SignInButton />
      </Show>   
      <Show when="signed-out">
        Signed out content
      <SignOutButton />
      </Show> 
    </div>
  );
}
