// src\app\layout.js
import Link from 'next/link'
import '../../globals.css'
import CartProductsContextComponent from '@/app/components/contexts/CartProductsContextComponent'


export const metadata = {
  title: 'Products Page',
  description: 'Show Products',
}

export default function ProductsLayout({ children }) {
  return (
   
        <div className="2xl:container text-2xl">
          <CartProductsContextComponent>
            {children}
          </CartProductsContextComponent>

        </div>

  )
}
