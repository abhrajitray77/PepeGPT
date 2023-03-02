'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

type Props = {
    chatId: string;
}

const ChatInput = ({chatId}: Props) => {
    const [prompt, setPrompt] = useState("");
    const { data: session } = useSession();

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
        <form className='p-5 space-x-5 flex'>
            <input type="text"
            className='bg-transparent flex-1 disabled:cursor-not-allowed
            disabled:text-gray-300 focus:outline-none'
            disabled={!session}
            value={prompt}
            onChange={(ch) => setPrompt(ch.target.value)}
            placeholder="Type your message here..."
             />

            <button type="submit"
            disabled={!prompt || !session}
            className="bg-[#11A37F] hover:opacity-50 text-white
            font-bold px-4 py-2 rounded disabled:bg-gray-300
            disabled:cursor-not-allowed"
            >
                <PaperAirplaneIcon className='h-5 w-5 -rotate-45' />
            </button>
        </form>
    </div>
  )
}

export default ChatInput