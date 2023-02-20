'use client'
import { signOut } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div className=''>
                <NewChat />
                <button onClick={()=> signOut()}
                 className="text-white font-bold text-3xl">
                  sign out
                 </button>
            </div>
        </div>
    </div>
  )
}

export default SideBar