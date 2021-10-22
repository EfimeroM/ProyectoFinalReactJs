import React,{ useState, createContext, useEffect } from 'react'

export const CartContext = createContext()
const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)
    console.log(carrito)
    
    const addToCart = (item) => {
        if((carrito.some( (prod) => prod.id === item.id))==false){
            setCarrito([...carrito, item])
        }else{
            alert("Este producto ya esta agregado al carrito")
        }
    }
    const removeItem = (itemId) => {
        const newCart = carrito.filter( (prod) => prod.id !== itemId )
        setCarrito(newCart)
    }
    const deleteCart = () => {
        setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            deleteCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}