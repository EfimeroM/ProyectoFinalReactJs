import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { UserAuthContext } from '../../context/UserAuthContext';
import {Navhistory} from "../NavHistory/Navhistory"
import { errorAlert, rightCardAlert } from '../SweetAlert/Alert';

export const Login = () => {
    const {push} = useHistory()
    const {showLogin, setShowLogin, setIsAuthenticated} = useContext(UserAuthContext);
    const account = JSON.parse(localStorage.getItem('account'))

    const handlesubmit = (e) => {
        e.preventDefault()
        if(account!=null && account.email && account.user && account.pass){
            if(document.getElementById("userLogin").value === account.user && document.getElementById("passLogin").value === account.pass){
                setIsAuthenticated(true)
                rightCardAlert("Bienvenido "+account.name+" "+account.surname+"<br>Ya puedes acceder a todo nuestro contenido")
                push("/")
            }else{
                errorAlert("Los datos ingresados no coinciden con su cuenta creada", "El problema persiste?")
            }
        }else{
            errorAlert("Por favor para ingresar primero registre su cuenta", "El problema persiste?")
        }
    }
    const [valuesLogin, setValuesLogin] = useState({
        user: '',
        pass: ''
    })
    const handleInputChange = (e) => {
        setValuesLogin({
            ...valuesLogin,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div id="login" style={ showLogin ? { display:'block'} : {display:'none'}} >
            {
            <Navhistory />
            }
            <div className="header-login">
                <h2>Iniciar Sesion</h2>
                <form onSubmit={handlesubmit} autocomplete="off" className="px-2">
                    <input
                    className="form-control my-3 px-2"
                    type="text"
                    placeholder="user"
                    name="user"
                    id="userLogin"
                    value={valuesLogin.user}
                    onChange={handleInputChange}
                    />
                    <input
                    className="form-control my-3 px-2"
                    type="password"
                    placeholder="pass"
                    name="pass"
                    id="passLogin"
                    value={valuesLogin.pass}
                    onChange={handleInputChange}
                    />
                    <input
                    className="btn btn-primary"
                    type="submit"
                    name="submit"
                    value="enviar"
                    />
                </form>
            </div>
            <div className="body-login">
                <h3>Tambien puedes registrarte</h3>
                <div className="px-2">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="Quiero registrarme"
                        onClick={() => {
                            setShowLogin(!showLogin);
                        }}
                        />
                </div>
            </div>
        </div>
    )
}
