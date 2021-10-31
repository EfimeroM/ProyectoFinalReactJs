import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const BodyCompany = ({id,comp,name, description, price, img, size}) => {

    return (
        <Card style={{ width: '18rem' }} className="mx-5">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Precio: ${price}</ListGroupItem>
                <ListGroupItem>Talles: {size}</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Link to={`/company/${comp}/${id}`}>
                <Button variant="primary">Agregar al carrito</Button>
            </Link>
            </Card.Body>
        </Card>
    )
}
