import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {
    
    const {carrito, deleteCart, calculateQuantity, calculatePrice} = useContext(CartContext)

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
                <h3>Precio Total: ${calculatePrice()}</h3>    
                <hr />
                <Button className="btn btn-success">Comprar</Button>
                <Button className="btn btn-danger mx-4" onClick={deleteCart}>Vaciar carrito <BsFillTrashFill/></Button>                
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
