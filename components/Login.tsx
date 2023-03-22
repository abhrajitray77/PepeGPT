'use client'

import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../public/imgs/pepe.webp";

//Login Page when no session is active

const Login = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="fixed grid grid-cols-2 place-items-center h-[100vh] w-full -z-50 overflow-hidden ">
        <div className="w-72 h-72 bg-purple-300 
        rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob">
         </div>
         <div className=" w-80 h-80 bg-yellow-300
          rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000">

          </div>
        <div className="w-[500px] h-[500px] bg-pink-300 
        rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000">

        </div>
        <div className="absolute -inset-y-0.3 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#11A37F]
        rounded-full mix-blend-normal filter blur-2xl opacity-70 animate-blob animation-delay-7000">

        </div>
      </div>
      <div className="flex justify-center flex-col items-center h-screen
      space-y-11">
        <Image className="w-[100px] h-[100px] md:w-[300px] md:h-[300px]"
        src= {logo}
        width= {700}
        height= {700}
        alt= "logo-gpt"
        />
        <button onClick={()=> signIn("google")}
        className="text-white font-bold text-3xl">
          Sign In to use PepeGPT
        </button>
      </div>

    </div>
  )
}

export default Login