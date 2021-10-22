import React, {useState, useEffect} from 'react'
import { Loading } from '../loading/loading'
import { listarArray } from '../helpers/listarArray'
import { stock } from '../data/stock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'

export const ItemListContainer = ({rutaImg}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        listarArray(stock)
        .then((res) =>{
            if (categoryId) {
                setItems( res.filter( game => game.category === categoryId) )
            } else {
                setItems( res )
            }
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
            console.log('fin item list container')
        })
    }, [categoryId])

    return (
        <section className="container my-5">
            {
                loading?
                <Loading />
                :
                <ItemList games = {items} rutaImg = {rutaImg}/>
            }
        </section>
    )
}
