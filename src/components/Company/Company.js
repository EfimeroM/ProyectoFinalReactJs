import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyHeader } from './CompanyHeader'
import './company.scss'
import { ProductListContainer } from '../ProductListContainer/ProductListContainer'
import { Loading } from '../loading/loading'
import { getFirestore } from '../../firebase/config'

export const Company = () => {
    const [company, setCompany] = useState([])
    const [loading, setLoading] = useState(false)
    const {companyName} = useParams()

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const company = db.collection('company').where('name', '==', String(companyName))

        company.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setCompany(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
        
    }, [companyName])

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
