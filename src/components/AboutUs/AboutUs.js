import React from 'react'
import './AboutUs.scss'

export const AboutUs = () => {
    return (
        <div id="about-us">
            <h2>Que es ShopCard?</h2>
            <h3>ShopCard le brinda una plataforma de e-commerce con características desarrolladas para potenciar las ventas del canal online.</h3>
            <div className="about-body">
            <h4>Sin costos por transacción</h4>
                    <h5>No! No es nuestro negocio tener ganancias de sus ventas, además creemos que los costos variables resultan fastidiosos. Por eso no tendrá que pagar nunca costos por transacciones.</h5>
            <h4>Carro de compras seguro</h4>
                    <h5>Las operaciones en su tienda online se registran en forma segura y sin riesgos. Además, cada vez que ingresa a su panel de control, se guarda un backup de todos sus datos. Sin duda sus datos y los de sus clientes se mantienen siempre seguros.</h5>
            <h4>Cree y edite el contenido de su sitio</h4>
                    <h5>A traves del editor que podra encontrar en el panel de control puede personalizar todo el contenido de la manera que usted desee. Incorpore imágenes, textos y videos.</h5>
            <h4>Haga de su tienda su sitio web</h4>
                    <h5>ShopCard no se limita solamente a su catálogo y carro de compras, sino que también le permite tener todos elementos necesarios para su sitio web. Cree las secciones que considere necesarias para aportarle la personalidad que usted desee.</h5>
            </div>
        </div>
    )
}
