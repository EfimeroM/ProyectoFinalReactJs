import React, { useEffect, useState } from 'react'
import { Loading } from '../loading/loading'
import { listarArray } from '../helpers/listarArray'
import { Items } from './Items'
import { list } from "../data/top"


export const HeaderGameListContainer = ({categoryId}) => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        listarArray(list)
        .then( (res) =>{
            setItem(res.filter( img => img.category === Number(categoryId)))
        })
        .catch((err) => console.log(err))
        .finally( () =>{
            setLoading(false)
            console.log('fin');
        } )
    }, [])
    
    return (
        <div className='header-game'>
            {
            loading ?
            <Loading />
            :
            item.map((item) => <Items {...item} key={item.id} />)
            }
        </div>
    )
}
