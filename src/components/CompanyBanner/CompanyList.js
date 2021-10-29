import React, { useEffect, useState } from 'react'
import { listCompany } from '../data/company'
import { Loading } from '../loading/loading'
import "./CompanyBanner.scss"
import { CompanyBanner } from './CompanyBanner'
import { listarArray } from '../helpers/listarArray'

export const CompanyList = () => {
    const [company, setCompany] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        listarArray(listCompany)
        .then( (res)=>{
            setCompany(res)
            setLoading(false)
        })
        .catch((err)=>console.log("error CompanyList"))
    }, [])

    return (
        <div className="content-company-banner">
            {
            loading ?
            <Loading />
            :
            company.map((item) => <CompanyBanner {...item} key={item.id} />)
            }
        </div>
    )
}
