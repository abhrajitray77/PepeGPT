import Header from './Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
            {/* Sidebar */}

            {/* client notifications */}

        <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
