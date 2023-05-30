'use client'

import React, { useState } from 'react'
import loginStyles from "../../../styles/login.module.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    const inputInfoUser = React.useRef(null);
    const inputContraseña = React.useRef(null);
    const botonIniciarSesion = React.useRef(null);
    const msgError = React.useRef(null);

    const [userinfo, setUserinfo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [botonDisabled, setBotonDisabled] = useState(true);

    const capturarUserinfo = (e) => {
        setUserinfo(e.target.value);
        verificarInputsLogin(e.target.value, contraseña)
    }

    const capturarContraseña = (e) => {
        setContraseña(e.target.value);
        verificarInputsLogin(userinfo, e.target.value);
    }

    const enviarDatos = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch('http://localhost:1234/iniciarSesion', {
                method: 'POST',
                body: JSON.stringify({
                    info: userinfo,
                    contraseña: contraseña
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const respJson = await respuesta.json();
            const error = respJson.error
            if (error === null) {
                localStorage.setItem("token", respJson.token);
                router.push('/inicio');
            } else {
                const inpInfo = inputInfoUser.current;
                const inpContra = inputContraseña.current;
                const err = msgError.current;
                setUserinfo('');
                setContraseña('');
                inpContra.value = '';
                inpInfo.value = '';
                err.style.visibility = 'visible';
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const verificarInputsLogin = (info, pass) => {
        const boton = botonIniciarSesion.current;
        if (info.length >= 3 && pass.length >= 8) {
            setBotonDisabled(false);
            boton.style.backgroundColor = "#FF8E0A";
            boton.style.cursor = "pointer";
        } else {
            setBotonDisabled(true);
            boton.style.backgroundColor = "rgba(172, 171, 171, 0.603)";
            boton.style.cursor = "default";
        }
    }

    return (
        <section id={loginStyles.sectionLogin}>
            <div id={loginStyles.conteinerLogin}>
                <div id={loginStyles.primeraLineaLogin}>
                    <Image
                        src='/flecha-atras.png'
                        width={25}
                        height={25}
                        alt="flecha-atras"
                        id={loginStyles.flechaAtrasLogin}
                    /><p id={loginStyles.IniciarSesion}>Iniciar Sesión</p>
                </div>

                <form id={loginStyles.formLogin}>
                    <label className={loginStyles.labelsLogin}>Nombre de Usuario o E-mail:</label>
                    <input className={loginStyles.inputsLogin} autoFocus onChange={capturarUserinfo} minLength="3" ref={inputInfoUser} type='text'></input>

                    <label className={loginStyles.labelsLogin}>Contraseña:</label>
                    <input className={loginStyles.inputsLogin} id={loginStyles.inputContraseñaLogin} minLength="8" onChange={capturarContraseña} ref={inputContraseña} type='password'></input>
                    <p id={loginStyles.errorMsg} ref={msgError}>* Usuario o contraseña incorrectos</p>
                    <button id={loginStyles.botonIniciarSesion} onClick={enviarDatos} disabled={botonDisabled} ref={botonIniciarSesion}>Iniciar Sesion</button>
                </form>
                <p id={loginStyles.olvidasteContraseña}>¿Olvidaste tu contraseña?</p>
            </div>
        </section >

    )
}
