'use client'

import { db } from '@/firebase';
import { PlusIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

//New Chat button
const NewChat = () => {
    const router = useRouter();
    const { data:session } = useSession();
    
    //navigates to new chat page route when a new document is created in firestore
  const createNewChat = async() => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"), {
        userId: session?.user?.email!,
        createdAt: serverTimestamp()
      }
    );
      //dynamic route to id
    router.push(`/chat/${doc.id}`);
  }

  return (
    <div className='border-gray-700 border chatRow'
    onClick={createNewChat}>
        <PlusIcon className="h-4 w-4" />
        <p>New Chat</p>
    </div>
  )
}

export default NewChat