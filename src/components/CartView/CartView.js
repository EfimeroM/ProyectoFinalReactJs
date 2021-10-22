import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {
    
    const {carrito, deleteCart, calculateQuantity} = useContext(CartContext)

    return (
        <div className="my-5 mx-5">
        {
            calculateQuantity()!=0?
            <>
                <h2>Resumen de compra</h2>
                <hr/>
                <div style={{display: 'flex'}}>
                    {
                        carrito.map( (prod)=>(
                            <CartItem item={prod}/>
                        ) )
                    }
                </div>
                <hr/>
                <Button className="btn btn-danger" onClick={deleteCart}>Vaciar carrito <BsFillTrashFill/></Button>
            </>
            :
            <>
            <h2>Ups..No encontramos nada que haya agregado al carrito</h2>
            <h4 className="my-5">Porfavor agregue algun producto al carrito para poder continuar</h4>
            </>
        }
        </div>
        
    )
}
