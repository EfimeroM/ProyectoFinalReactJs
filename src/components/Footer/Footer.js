import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Footer.scss'
export const Footer = () => {

    const [footer, setFooter] = useState(true)
    let location = useLocation();
    
    useEffect(() => {
        if(String(location.pathname) === "/login"){
            setFooter(false)
        }else{
            setFooter(true)
        }
    }, [location])
    
    return (
        <>
            {
                footer?
                <div id="footer" bg="dark">
                    <div id="footer-left">
                        <p>© 2021 ShopCard. All Rights Reserved.</p>
                    </div>
                    <div id="footer-right">
                        <p>Politicas de privacidad</p>
                        <p>Gestion de Cookies</p>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}
