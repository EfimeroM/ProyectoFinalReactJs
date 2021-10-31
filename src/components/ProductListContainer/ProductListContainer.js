import React, {useState, useEffect} from 'react'
import { BodyCompany } from '../Company/BodyCompany'
import { useParams } from 'react-router-dom'
import './productListContainer.scss'
import { Loading } from '../loading/loading'
import { getFirestore } from '../../firebase/config'
import { ProductDetail } from '../ProductDetail/ProductDetail'

export const ProductListContainer = ({name}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const {productId} = useParams()
    const {categoryId} = useParams()

    console.log(productId)

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore()
        const productos = db.collection('products')
        const item = productId ? productos.doc(productId)
                            :categoryId? db.collection('products').where('category', '==', categoryId)
                            : db.collection('products').where('comp', '==', name)
        if(productId){
            item.get()
            .then((doc) => {
                setProducts({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )
        }else{
            item.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )
        }
    }, [categoryId,productId])
    
    

    return(
        <div className={`card-product ${categoryId && "card-category"}`} >
            {
                loading?
                <Loading />
                :productId?
                <ProductDetail {...products} key={products.id} />
                :categoryId?
                products.map((product) => <BodyCompany {...product} key={product.id} />) 
                :   
                products.map((product) => <BodyCompany {...product} key={product.id} />) 
            }
        </div>
    )
}
