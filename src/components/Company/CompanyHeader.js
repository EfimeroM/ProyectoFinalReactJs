import React from 'react'

export const CompanyHeader = ({name, type, img, banner, shipments, location, gallery1, gallery2, gallery3}) => {

    return (
        <>
        <img className="banner" src={`../../${banner}`} />
        <div className="header">
            <img className="company-img front" src={`../../${img}`} />
            <h3 className="company-name cb front" >{name}</h3>
            <div className="company-type cb front">Tipo: {type}</div>
            <div className="company-shipments cb front">Envios: {shipments}</div>
            <div className="company-location cb front">Locacion: {location}</div>
        </div>
        </>
    )
}
