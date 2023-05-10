"use client"
import React, { useEffect } from 'react'
import ProductsCardAdmin from '../ProductsCardAdmin'

const ReadProductsMap = ({ readProducts, isAdmin }) => {

    return (
        <>
            {
                readProducts.map((curItem, index) => {
                    return (
                        <ProductsCardAdmin key={index} isAdmin={isAdmin}
                            {...curItem}>
                        </ProductsCardAdmin>
                    )
                })
            }

        </>
    )
}

export default ReadProductsMap