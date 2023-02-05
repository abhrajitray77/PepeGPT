import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='flex flex-col items-center space-y-5 mt-5'>
            <div className="flex flex-col items-center space-y-2">
                <Image
                src = "https://links.papareact.com/jne"
                height={10}
                width = {50}
                alt="logo"
                />

                <p className="text-blue-400">Welcome to Meta Messenger</p>
            </div>

            <Link href="/auth/signin" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Sign In
            </Link>
        </div>
    </header>
  )
}

export default Header