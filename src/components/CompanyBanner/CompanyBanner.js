import React from 'react'
import { Link } from 'react-router-dom'
import './CompanyBanner.scss'

export const CompanyBanner = ({name, type, img, shipments, location, gallery1, gallery2, gallery3}) => {
    return (
        <Link to={`/company/${name}`} style={{textDecoration:"none"}}>
            <div className="company-banner" >
                <img className="company-img front" src={img} />
                <h3 className="company-name cb front" >{name}</h3>
                <div className="company-type cb front">Tipo: {type}</div>
                <div className="company-shipments cb front">Envios: {shipments}</div>
                <div className="company-location cb front">Locacion: {location}</div>
                <div className="company-gallery front">
                    <img className="gallery" src={gallery1} />
                    <img className="gallery" src={gallery2} />
                    <img className="gallery" src={gallery3} />
                </div>
            </div>
        </Link>
    )
}
