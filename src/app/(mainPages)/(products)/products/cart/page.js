


import ShowCartCall from '@/app/components/cliants/ShowCart/ShowCartCall'
import CartProductsContextComponent from '@/app/components/contexts/CartProductsContextComponent'
import { getAllProductsData } from '@/utils/functions/getAllProducts';
import React from 'react'

const Cart = async () => {

  // const productsJSONObjectFS = await getAllProductsData();
  // const productsArrayFS = productsJSONObjectFS.products;

  return (
    <>


      <ShowCartCall></ShowCartCall>



    </>
  )
}

export default Cart