import React, { useState, useEffect } from 'react'
import { Loading } from '../loading/loading'
import { useParams } from 'react-router-dom'
import { ProductDetail } from './ProductDetail'
import { getFirestore } from '../../firebase/config'

export const ProductDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {productId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const productos = db.collection('products')
        const item = productos.doc(productId)
        
        item.get()
            .then((doc) => {
                setProducts({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [productId])
    
    
    return (
        <div>
            {
                loading?
                <Loading />
                :
                <ProductDetail {...products} key={products.id} />
            }
        </div>
    )
}
