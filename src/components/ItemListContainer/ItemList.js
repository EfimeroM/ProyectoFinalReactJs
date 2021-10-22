import React from 'react'
import { Item } from './Item'

export const ItemList = ({games = [], rutaImg = ""}) => {

    return (
        <div className="container">
            <h2>Lista de Juegos</h2>
            <hr />
            <div className="row">
            { games.map( (item)=> <Item {...item} key={item.id} rutaImg={rutaImg} /> ) }
            </div>
        </div>
    )
}
