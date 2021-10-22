import React from 'react'
import { Spinner } from 'react-bootstrap'
import './loading.css'


export const Loading = () => {

    return(
        <div className="loading">
            <Spinner animation="border" />
            <p>Cargando</p>
        </div>
    )
}
