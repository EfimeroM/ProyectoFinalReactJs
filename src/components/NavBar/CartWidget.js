import React,{ useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const {calculateQuantity} = useContext(CartContext)

    return (
        <div className={calculateQuantity() === 0? "delete" : "cart-widget"}>
            <AiOutlineShoppingCart className="icono" />{calculateQuantity()}
        </div>
    )
}
