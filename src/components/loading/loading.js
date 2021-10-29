import React from 'react'
import { Spinner } from 'react-bootstrap'
import './loading.scss'


export const Loading = () => {

    return(
        <div className="loading">
            <Spinner animation="grow" variant="danger"  />
        </div>
    )
}
