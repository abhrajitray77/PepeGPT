import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, GlobeAsiaAustraliaIcon, LightBulbIcon, SunIcon } from "@heroicons/react/24/outline";

//default homepage when session is active

export default function Home() {
  return (
   <main className="flex flex-col items-center justify-center h-screen px-2 text-white">
    <h1 className="text-4xl font-bold mb-20">PepeGPT</h1>
      
      <div className="grid grid-cols-3 space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Icon here */}
            <LightBulbIcon className = "h-8 w-8 text-blue-500" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="egItem">&rdquo;Let&apos;s talk about space!&rdquo;</p>
            <p className="egItem">&rdquo;Why is the sky blue?&rdquo;</p>
            <p className="egItem">&rdquo;Compose me an original song!&rdquo;</p>

          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Icon here */}
            <BoltIcon className = "h-8 w-8 text-blue-500" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="egItem">&rdquo;Let&apos;s talk about space!&rdquo;</p>
            <p className="egItem">&rdquo;Why is the sky blue?&rdquo;</p>
            <p className="egItem">&rdquo;Compose me an original song!&rdquo;</p>

          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Icon here */}
            <ExclamationTriangleIcon className = "h-8 w-8 text-blue-500" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="egItem">&rdquo;Let&apos;s talk about space!&rdquo;</p>
            <p className="egItem">&rdquo;Why is the sky blue?&rdquo;</p>
            <p className="egItem">&rdquo;Compose me an original song!&rdquo;</p>
          </div>
        </div>
      </div>
   </main>
  )
}
