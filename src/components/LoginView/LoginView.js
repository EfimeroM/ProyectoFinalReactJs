import React from "react";
import { errorAlert } from "../SweetAlert/Alert";
import { Login } from "./Login";
import "./Login.scss"
import { Register } from "./Register";

export const LoginView = () => {

    return (
        <div id="login-content">
            <Login />
            <Register />
            <div id="login-body">
            </div>
        </div>

    );
}