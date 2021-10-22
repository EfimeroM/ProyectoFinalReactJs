import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { Loading } from '../loading/loading'
import { listarArray } from '../helpers/listarArray'
import { stock } from '../data/stock'
import './ItemDetailContainer.scss'

export const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {detailId} = useParams()

    useEffect(() => {
        setLoading(true)
        listarArray(stock)
        .then((res) =>{
            if (detailId) {
                setItems( res.filter( game => game.id === Number(detailId)) )
            } else {
                setItems( res )
            }
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
            console.log('fin item list container')
        })
    }, [detailId])

    return (
        <>
            {
                loading?
                <Loading />
                :
                items.map((item) => <ItemDetail {...item} key={item.id} />)
            }
        </>
    )
}
