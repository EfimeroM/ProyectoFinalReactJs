import React, {useState, useEffect} from 'react'
import { listarArray } from '../helpers/listarArray'
import { listProducts } from '../data/products'
import { BodyCompany } from '../Company/BodyCompany'
import { useParams } from 'react-router-dom'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import './productListContainer.scss'
import { Loading } from '../loading/loading'

export const ProductListContainer = ({name}) => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const {productId} = useParams()
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        listarArray(listProducts)
        .then((res) =>{
            if(productId){
                setProduct( res.filter( pr => pr.id === Number(productId)) ) 
            }else if(categoryId){
                setProduct( res.filter( pr => String(pr.category) === String(categoryId)) )
            }else{
                setProduct( res.filter( pr => String(pr.comp) === String(name)) )
            }
            setLoading(false)
        })
        .catch((err)=>console.log(err))
    }, [categoryId])
    return(
        <div className={`card-product ${categoryId && "card-category"}`} >
            {
                loading?
                <Loading />
                :productId?
                product.map((product) => <ProductDetail {...product} key={product.id} />)
                :categoryId?
                product.map((product) => <BodyCompany {...product} key={product.id} />) 
                :   
                product.map((product) => <BodyCompany {...product} key={product.id} />) 
            }
        </div>
    )
}
