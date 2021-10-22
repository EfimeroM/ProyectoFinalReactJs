import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import './ItemListContainer.scss'

export const Item = ({id, name, description, price, img, rutaImg}) => {
    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={rutaImg+img} />
            <Card.Body>
                <Card.Title><b>{name}</b></Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Agregar al carrito</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
