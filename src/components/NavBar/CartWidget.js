import React,{ useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const {calculateQuantity} = useContext(CartContext)

    return (
        <>
            <AiOutlineShoppingCart className="icono"/>{calculateQuantity()}
        </>
    )
}
