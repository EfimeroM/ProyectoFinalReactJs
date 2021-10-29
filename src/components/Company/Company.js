import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { listarArray } from '../helpers/listarArray'
import { listCompany } from '../data/company'
import { CompanyHeader } from './CompanyHeader'
import './company.scss'
import { ProductListContainer } from '../ProductListContainer/ProductListContainer'
import { Loading } from '../loading/loading'

export const Company = () => {
    const [company, setCompany] = useState([])
    const [loading, setLoading] = useState(false)
    const {companyName} = useParams()

    useEffect(() => {
        setLoading(true)
        listarArray(listCompany)
        .then((res) =>{
            setCompany( res.filter( game => String(game.name) === String(companyName)) )
            setLoading(false)
        })
        .catch((err)=>console.log(err))
    }, [])
    

    return (
        <>
        {
            loading?
            <Loading />
            :
            <>
                <div className="header-company">
                    {company.map((company) => <CompanyHeader {...company} key={company.id} />)}  
                </div>
                <div className="body-company">
                        {company.map((company) => <ProductListContainer {...company} key={company.id} />)}
                </div>
            </>
        }
        </>
        
        
    )
}
