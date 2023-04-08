// src\app\layout.js
import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="2xl:container text-2xl">
          {children}
        </div>
      </body>
    </html>
  )
}
