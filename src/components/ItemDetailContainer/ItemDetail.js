import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Button } from 'react-bootstrap'
import { AiOutlineHome } from "react-icons/ai";
import { BsArrow90DegLeft } from "react-icons/bs";
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({id, name, descriptionExtend, price, img, lanzamiento,jugadores,category, stock}) => {
    const {goBack, push} = useHistory()
    const {addToCart} = useContext(CartContext)
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
            <div className="nav">
                <Button variant="secondary" className="button" onClick={() => goBack()}><BsArrow90DegLeft /></Button>
                <Button variant="secondary" className="button" onClick={() => push("/")}><AiOutlineHome /></Button>
            </div>
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
                        <h5 className="my-3">Elija la cantidad a comprar</h5>
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                        <Button className="button" onClick={handleAgregar} >Agregar al carrito</Button>   
                    </div>
                </div>
            </div>
        </>
        
    )
}
