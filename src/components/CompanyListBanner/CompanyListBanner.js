import React, { useEffect, useState } from 'react'
import { Loading } from '../loading/loading'
import { getFirestore } from '../../firebase/config'
import { CompanyBanner } from './CompanyBanner'
import "./CompanyListBanner.scss"

export const CompanyListBanner = () => {
    const [company, setCompany] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const company = db.collection('company')

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
