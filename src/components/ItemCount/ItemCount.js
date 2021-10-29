import React from 'react'

export const ItemCount = ({cantidad, modify, max}) => {

    const handleRestar = () => {
        if(cantidad > 0){
            modify(cantidad-1)
        } 
    }
    const handleSumar = () => {
        if(cantidad < max){
            modify(cantidad+1)
        } 
    }

    return (
        <div>
            <button disabled={cantidad===0} onClick={handleRestar} className="btn btn-secondary">
                -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button disabled={cantidad===max} onClick={handleSumar} className="btn btn-secondary">
                +
            </button>
        </div>
    )
}
