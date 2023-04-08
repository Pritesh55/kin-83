// src\app\layout.js
import Header from '../components/servers/header'
import '../globals.css'


export default function mainPagesLayout({ children }) {
  return (

    <div className="flex flex-col gap-y-8">
      <div className="w-full bg-antiquewhite rounded-b-full px-20 py-2">
        <Header></Header>
      </div>

      {children}
    </div>

  )
}