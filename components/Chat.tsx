"use client"
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';

//New chat page

type Props = {
    chatId: string;
};

const Chat = ({chatId}: Props) => {
  const {data: session } = useSession();

  //mapping our items from the collection
  //double checking if the session exists
  const [messages] = useCollection(session && query(
    collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
    orderBy("createTime", "asc")
  ))


  return (
    <div className='flex-1'>
      {messages?.docs.map((message) => (
        <Message key = {message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat