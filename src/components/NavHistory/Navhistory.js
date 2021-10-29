import React from 'react'
import { useHistory } from 'react-router'
import { AiOutlineHome } from "react-icons/ai";
import { BsArrow90DegLeft } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import './navHistory.scss'

export const Navhistory = () => {
    const {goBack, push} = useHistory()
    
    return (
        <div className="nav">
                <Button variant="secondary" className="button" onClick={() => goBack()}><BsArrow90DegLeft /></Button>
                <Button variant="secondary" className="button" onClick={() => push("/")}><AiOutlineHome /></Button>
            </div>
    )
}
