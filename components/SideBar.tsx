'use client'

import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'

const SideBar = () => {
  const { data:session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div className=''>
                <NewChat />

                 
            </div>
        </div>

        <button className='border-gray-700 border chatRow'>
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <h1>Logout</h1>
        </button>
    </div>
  )
}

export default SideBar