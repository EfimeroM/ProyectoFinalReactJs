import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({id, name, descriptionExtend, price, img, lanzamiento,jugadores,category, stock}) => {
    const {addToCart, isInCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () =>{
        const newItem = {
            id,
            img,
            name,
            price,
            category,
            cantidad
        }
        if(cantidad>0){
            addToCart(newItem)
        }
    }

    return (
        <>
            <div className="item-detail-container">
                <div className="datos-item">
                    <div className="cabecera">
                        <img src={`../${img}`} alt={name}/>
                    </div>
                    <div className="datos">
                        <hr/>
                        <p>{name}</p>
                        <hr/>
                        <p>Precio: ${price}</p>
                        <hr/>
                        <p>Lanzamiento: {lanzamiento}</p>
                        <hr/>
                        <p>Jugadores: {jugadores}</p>
                    </div>
                </div>
                <div className="detalles-compra">
                    <div className="detalles">
                        {descriptionExtend}
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
                                <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                                <Button className="button" onClick={handleAgregar} >Agregar al carrito</Button>
                            </>
                            
                        }
                        
                    </div>
                </div>
            </div>
        </>
        
    )
}
