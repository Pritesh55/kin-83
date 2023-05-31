// src\app\layout.js

import Header from '@/app/components/servers/header'
import '../../../globals.css'


export default function cartPagesLayout({ children }) {
    return (

        <div className="flex flex-col gap-y-8">
            {children}
        </div>

    )
}