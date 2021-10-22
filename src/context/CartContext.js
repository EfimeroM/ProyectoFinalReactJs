import React,{ useState, createContext, useEffect } from 'react'

export const CartContext = createContext()
const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(init)
    
    const addToCart = (item) => {
        setCarrito([...carrito, item])
    }
    const removeItem = (itemId) => {
        const newCart = carrito.filter( (prod) => prod.id !== itemId )
        setCarrito(newCart)
    }
    const isInCart = (itemId) => {
        return carrito.some( (prod) => prod.id === itemId )
    }
    const deleteCart = () => {
        setCarrito([])
    }
    const calculateQuantity = () =>{
        return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
    }
    const calculatePrice = () =>{
        return carrito.reduce( (acc, prod) => acc + prod.cantidad * prod.price, 0 )
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            isInCart,
            deleteCart,
            calculateQuantity,
            calculatePrice
        }}
        >
            {children}
        </CartContext.Provider>
    )
}