"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

//Chat input form component
type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState(""); //prompt state
  const { data: session } = useSession(); //getting session data

  //useSWR hook to get model
  const model = "gpt-3.5-turbo";

  //function to send message to firestore
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return; //if prompt is empty, return

    const input = prompt.trim(); //getting rid of whitespace
    setPrompt("");

    const message: Message = {
      text: input,
      createTime: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        image:                          //if user has image, use it, else use avatar with a random seed
          session?.user?.image! ||
          `https://avatars.dicebear.com/api/human/${session?.user?.email!}.svg`,
      },
    };

    await addDoc(
        collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
        message
    ); //adding message to firestore

    //toast notification

    const notification = toast.loading('ChatGPT is working on it...')

    await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            promt: input, chatId, model, session,
        }),
    }).then(()=>{
        //toast notification for success message
        toast.success('Response has arrived!', {
            id: notification,
        })
    })
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
          type="text"
          className="bg-transparent flex-1 disabled:cursor-not-allowed
            disabled:text-gray-300 focus:outline-none"
          disabled={!session}
          value={prompt}
          onChange={(ch) => setPrompt(ch.target.value)} //setting prompt state to input value on change event
          placeholder="Type your message here..."
        />

        <button
          type="submit"
          disabled={!prompt || !session} //if prompt is empty or session is null, disable button
          className="bg-[#11A37F] hover:opacity-50 text-white
            font-bold px-4 py-2 rounded disabled:bg-gray-300
            disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
