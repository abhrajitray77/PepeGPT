"use client"
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
import pepehack from "../public/imgs/pepehack.gif"

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
    <div className='flex-1 overflow-y-auto overflow-x-hidden'>
      {messages?.empty && (
        <div className='mt-4'>
          <Image
          className='mx-auto'
           src={pepehack}
           width={100}
           height={100}
           alt="pepe typing"
           />
          <h1 className="mt-10 text-center text-gray-100">
            Type something first!
          </h1>
        </div>
      )}
      {messages?.docs.map((message) => (
        <Message key = {message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat