import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './productListContainer.scss'
import { Loading } from '../loading/loading'
import { getFirestore } from '../../firebase/config'
import { ProductList } from './ProductList'

export const ProductListContainer = ({name}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const item = categoryId? db.collection('products').where('category', '==', String(categoryId))
                            : db.collection('products').where('comp', '==', name)
        item.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })       
    }, [categoryId, name])

    return(
        <div className={`card-product ${categoryId && "card-category"}`} >
            {
                loading?
                <Loading />
                :   
                products.map((product) => <ProductList {...product} key={product.id} />) 
            }
        </div>
    )
}
