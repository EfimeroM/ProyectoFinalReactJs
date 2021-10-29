import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ProductDetail = ({id,comp,name, description, price, img, size, stock}) => {
    const {addToCart, isInCart, calculateQuantity} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)
    const handleAgregar = () =>{
        const newItem = {id,comp,name, description, price, img, size, cantidad}
        if(cantidad>0){
            addToCart(newItem)
        }
    }

    return (
        <>
            <div className="item-detail-container">
                <div className="datos-item">
                    <div className="cabecera">
                        <img src={`../../${img}`} alt={name}/>
                    </div>
                    <div className="datos">
                        <hr/>
                        <p>{name}</p>
                        <hr/>
                        <p>Talle: {size}</p>
                        <hr/>
                        <p>Precio: ${price}</p>
                    </div>
                </div>
                <div className="detalles-compra">
                    <div className="detalles"> 
                    {description}
                    </div>
                    <div className='compra'>
                        
                        {
                            isInCart(id)?
                            <Link to="/cart">
                                <Button className="button">Terminar Compra</Button>
                            </Link>
                            :
                            <>
                                <h5 className="my-3">Elija la cantidad a comprar</h5>
                                <ItemCount cantidad={cantidad} modify={setCantidad} max={stock} />
                                <Button className="button" onClick={handleAgregar} disabled={cantidad===0} >Agregar al carrito</Button>
                            </>                            
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
