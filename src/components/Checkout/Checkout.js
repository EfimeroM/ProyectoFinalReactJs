import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { generateOrder } from '../../firebase/generateOrder'
import { Loading } from '../loading/loading'
import './Checkout.scss'
import { errorAlert, orderCompleteAlert } from '../SweetAlert/Alert'

export const Checkout = () => {
    const letters =  /^[a-zA-Z]+$/
    const email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/
    const number = /^[0-9]+$/
    const account = JSON.parse(localStorage.getItem('account'))
    const [loading, setLoading] = useState(false)
    const {carrito, calculateQuantity, deleteCart} = useContext(CartContext)
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    //Al hacer submit
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if(values.nombre.length !== 0 && values.apellido.length !== 0 && values.email.length !== 0 && values.tel.length !== 0){
            generateOrder(values, carrito, calculateQuantity())
            .then((res) => {
                orderCompleteAlert(res, deleteCart)
            })
            .catch((err) => {
                errorAlert('Los siguientes productos no cuentan con el stock total que eligió',
                 `${err.map(el => `${el.name} x${el.cantidad}, en stock: ${el.stock}`).join(', ')}`)
            })
            .finally(() => {
                setLoading(false)
            })
        }else{
            errorAlert("El formulario no pudo enviarse por favor revise la información provista")
            setLoading(false)
        }
    }
    //completa los inputs automaticamente con los datos del usuario
    const setInputs = () => {
        return new Promise ((resolve, reject)=>{
            values.nombre = account.name
            values.apellido = account.surname
            values.email = account.email
            values.tel = account.phone
            if(values.nombre.length !== 0 && values.apellido.length !== 0 && values.email.length !== 0 && values.tel.length !== 0){
                resolve("form completo")
            }else{
                console.log(values.nombre)
                console.log(account)
                reject("Estamos teniendo problemas con el auto completado por favor complete el formulario de forma manual")
            }             
        })
    }
    const completeForm = (e) => {
        setInputs()
        .then((res)=>handleSubmit(e))
        .catch((err)=>errorAlert(err, "El problema persiste?"))
    }

    return (
        <>
            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loading/>}

            <div id="checkout">
                <h2>Porfavor complete el formulario para continuar con su compra</h2>
                <hr/>
                <div className="checkout-body">
                    <form onSubmit={handleSubmit} id="formulario-checkout">
                        <h3>Formulario de compra</h3>
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleInputChange}
                            />   
                            {
                            values.nombre.length >0?
                                !values.nombre.match(letters) && <small>No se admiten numeros en este campo</small>
                                :
                                <small>Este campo es obligatorio</small>
                            }
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Apellido"
                            name="apellido"
                            value={values.apellido}
                            onChange={handleInputChange}
                            />
                            {
                            values.apellido.length >0?
                                !values.apellido.match(letters) && <small>No se admiten numeros en este campo</small>
                                :
                                <small>Este campo es obligatorio</small>
                            }
                        <input
                            className="form-control my-2"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            />
                            {
                            values.email.length >0?
                                !values.email.match(email) && <small>Ingrese un correo electronico valido</small>
                                :
                                <small>Este campo es obligatorio</small>
                            }
                        <input
                            className="form-control my-2"
                            type="tel"
                            placeholder="Teléfono"
                            name="tel"
                            value={values.tel}
                            onChange={handleInputChange}
                            />
                            {
                            values.tel.length >0?
                                !values.tel.match(number) && <small>Solo se admiten numeros en este campo</small>
                                :
                                <small>Este campo es obligatorio</small>
                            }
                        <button className="btn btn-success" type="submit" disabled={loading}>Finalizar</button>
                    </form>
                    <div className="checkout-o"><p>O</p></div>
                    <div className="checkout-target">
                        <div className="target" onClick={completeForm}>
                            <h4>Tambien puede usar los datos de su cuenta:</h4>
                            <h5>Nombre y Apellido: {account.name+" "+account.surname}</h5>
                            <h5>Correo: {account.email}</h5>
                            <h5>Telefono: {account.phone}</h5>
                            <p>click en la tarjeta para seguir con estos datos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
