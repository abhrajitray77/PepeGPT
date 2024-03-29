import Header from './Header'
import './globals.css'
import SideBar from '@/components/SideBar'
import SessionProvider from "../components/SessionProvider"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {/* if there is no session */}
          {!session ? (
            <Login />
          ): (
        <div className="flex">
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto
          md:min-w-[18rem]'>
            {/* Sidebar */}
            <SideBar />
          </div>

            {/* client provider notifications */}

            <ClientProvider />

        <div className="bg-[#343541] flex-1">{children}</div>
        </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
