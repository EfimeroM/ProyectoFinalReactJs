import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../../context/UserAuthContext';
import {Navhistory} from "../NavHistory/Navhistory"
import { errorAlert, rightCardAlert } from '../SweetAlert/Alert';

export const Register = () => {
    const {showLogin, setShowLogin} = useContext(UserAuthContext)
    const [email, setEmail] = useState(false)
    const [emailVerified, setEmailVerified] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [valuesRegister, setValuesRegister] = useState({
        name: '',
        surname: '',
        phone: '',
        user: '',
        email: '',
        pass: ''        
    })

    const handleViewEmail = (e) => {
        handleInputChange(e)        
        valuesRegister.email.length <=1 ?
            setEmail(false)
            :
            setEmail(true)
            handleEmailVerified()
    }
    const handleEmailVerified = () =>{
        document.getElementById("email").value === document.getElementById("emailVerified").value ?
            setEmailVerified(true)
            :
            setEmailVerified(false)
    }
    
    const handleInputChange = (e) => {
        setValuesRegister({
            ...valuesRegister,
            [e.target.name]: e.target.value
        })
        if(document.getElementById("name").value!=='' && document.getElementById("surname").value!=='' && document.getElementById("phone").value!=='' && document.getElementById("user").value!=='' && document.getElementById("pass").value!=='' && document.getElementById("email").value === document.getElementById("emailVerified").value){
            setSubmit(true)
        }else{
            setSubmit(false)
        }
    }
    const resetForm = () => {
        setValuesRegister({
            name: '',
            surname: '',
            phone: '',
            user: '',
            email: '',
            pass: ''
        })
        setEmail(false)
        document.getElementById("registerForm").reset()
    }
    const saveAccount = (e) => {
        e.preventDefault()
        return new Promise((resolve, reject) => {
            localStorage.setItem("account", JSON.stringify(valuesRegister))
            if(document.getElementById("name").value!=='' && document.getElementById("surname").value!=='' && document.getElementById("phone").value!=='' && document.getElementById("user").value!=='' && document.getElementById("pass").value!=='' && document.getElementById("email").value!=='' && document.getElementById("email").value === document.getElementById("emailVerified").value){
                resolve("save cuenta")  
            }
            else{
                reject("error")                              
            }
        })
        
    }
    const callSaveAccount = (e) => {
        saveAccount(e)
            .then((res) => {
                resetForm()
                rightCardAlert("Cuenta registrada correctamente<br>Ahora puede iniciar sesión")
                setShowLogin(true) 
            })
            .catch((err) => {
                errorAlert("Tuvimos un error al registrar su usuario, por favor intente nuevamente en unos minutos", "El problema persiste?")
            }) 
    }

    return (
        <div id="register" style={ !showLogin ? { display:'block'} : {display:'none'}} >
            {
            <Navhistory />
            }
            <div className="header-login">
                <h2>Registrate para acceder a todo nuestro contenido</h2>
                <form className="px-2" autocomplete="off" id="registerForm">
                    <div className="name-surname">
                        <div className="box">
                            <input
                            className="form-control my-3 px-2"
                            type="text"
                            placeholder="nombre"
                            name="name"
                            id="name"
                            value={valuesRegister.name}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="box">
                            <input
                            className="form-control my-3 px-2"
                            type="text"
                            placeholder="apellido"
                            name="surname"
                            id="surname"
                            value={valuesRegister.surname}
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <input
                    className="form-control my-3 px-2"
                    type="text"
                    placeholder="numero de telefono"
                    name="phone"
                    id="phone"
                    value={valuesRegister.phone}
                    onChange={handleInputChange}
                    />   
                    <input
                    className="form-control my-3 px-2"
                    type="text"
                    placeholder="usuario"
                    name="user"
                    id="user"
                    value={valuesRegister.user}
                    onChange={handleInputChange}
                    />                 
                    <input
                    className="form-control my-3 px-2"
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                    value={valuesRegister.email}
                    onChange={handleViewEmail}
                    />
                    <div class = "mb-3" style={ email ? { display:'block'} : {display:'none'}} >
                        <input 
                        className="form-control"
                        type="email"
                        placeholder="vuelva a ingresar su email"
                        name="emailVerified" 
                        ariaDescribedby = "caducidadHelp"
                        id="emailVerified"
                        onChange={handleEmailVerified} 
                        />
                        <div id = "caducidadHelp" style={ emailVerified ? { display:'block', color:'green'} : {display:'none'}}>Email verificado correctamente</div>
                        <div id = "caducidadHelp" style={ !emailVerified ? { display:'block', color:'red'} : {display:'none'}}>El email ingresado debe ser el mismo</div>
                    </div>
                    <input
                    className="form-control my-3 px-2"
                    type="password"
                    placeholder="contraseña"
                    name="pass"
                    id="pass"
                    value={valuesRegister.pass}
                    onChange={handleInputChange}
                    />
                    <input
                    className="btn btn-primary"
                    type="submit"
                    name="submit"
                    value="enviar"
                    onClick={callSaveAccount}
                    disabled={submit===false}
                    />
                </form>
            </div>
            <div className="body-login">
                <h3>Si ya tienes tu cuenta inicia sesion</h3>
                <div className="px-2">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="Quiero iniciar sesion"
                        onClick={() => {
                            setShowLogin(!showLogin);
                        }}
                        />
                </div>
            </div>
        </div>
    )
}
