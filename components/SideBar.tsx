/* eslint-disable @next/next/no-img-element */
'use client'

import { db } from '@/firebase'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { collection, orderBy, query } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'
import ChatRow from './ChatRow'

const SideBar = () => {
  const { data:session } = useSession();
  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, "users", session?.user?.email!, "chats"),
       orderBy("createdAt", "asc")
  )
  );
  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div className=''>
                <NewChat />

                 {chats?.docs.map((chat) => (
                  <ChatRow key={chat.id} id={chat.id} />
                ))}
            </div>
        </div>

        <button className='border-gray-700 border chatRow justify-between'
          onClick={()=> signOut()}>
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          <h1>Logout</h1>
          <img
          src = {session?.user?.image!} 
          alt = "profile pic"
          className='h-8 w-8 rounded-full my-auto'
          />
        </button>
    </div>
  )
}

export default SideBar