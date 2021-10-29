import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartView.scss'

export const CartItem = ({item}) => {
    
    const {removeItem} = useContext(CartContext)
    const rutaImg = "url('"+item.img+"')"
    return (
        <>
            <Card style={{ width: '18rem', background: rutaImg, backgroundSize: '100%', backdropFilter: 'blur(100px)'}} className="my-5 mx-2 bg">
                <Card.Body>
                    <Card.Title className="text-item">{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.comp}</Card.Subtitle>
                    <Card.Text className="text-item">{item.description}</Card.Text>
                    <Card.Text className="text-item">Cantidad: {item.cantidad}</Card.Text>
                    <Card.Text className="text-item">Precio: {item.price}</Card.Text>
                    <Card.Text className="btn btn-danger text-item" onClick={() => removeItem(item.id)}><BsFillTrashFill/></Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
