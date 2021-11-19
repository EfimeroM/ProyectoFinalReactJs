import React from 'react'
import './HomeView.scss'
import { CompanyListBanner } from "../CompanyListBanner/CompanyListBanner"

export const HomeView = () => {
    return (
        <>
        <div id="homeview">
            <h2>Bienvenido a ShopCard</h2>
            <h3>ShopCard es una web que permite a las marcas/emprendimientos de ropa tener su propia web con los articulos que tengan en stock, esto solamente subiendo su catalogo, pudiendo tambien eliminar, modificar y agregar articulos, todo desde el panel de control de usuario!!</h3>
        </div>
        {
            <CompanyListBanner /> 
        }
        </>
    )
}
