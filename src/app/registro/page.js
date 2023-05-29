'use client'

import React from "react";
import registroStyles from "../../../styles/registro.module.css"
import { useState, useRef } from "react";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/navigation';


export default function Registro() {

    const router = useRouter();

    const botonContinuarUno = React.useRef(null);
    const botonContinuarDos = React.useRef(null);
    const inputEmail = React.useRef(null);
    const errorMessageTexto = React.useRef(null);
    const primerContenedorRegistro = React.useRef(null);
    const segundoContenedorRegistro = React.useRef(null);
    const ojoCerrado = React.useRef(null);
    const ojoAbierto = React.useRef(null);
    const segundoLabel = React.useRef(null);

    const [email, setEmail] = useState('');
    const [estadoBotonContinuar, setEstadoBotonContinuar] = useState(true);
    const capturarEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        const input = inputEmail.current;
        const boton = botonContinuarUno.current;
        if (input.checkValidity()) {
            setEstadoBotonContinuar(false);
            boton.style.cursor = "pointer"
            boton.style.backgroundColor = "#FF8E0A"
            boton.style.transform = "scale(1.025)"
        } else {
            setEstadoBotonContinuar(true);
            boton.style.cursor = "default";
            boton.style.transform = "scale(1)"
            boton.style.backgroundColor = "rgba(172, 171, 171, 0.603)"
        };
    };

    const verificarEmail = async (e) => {
        e.preventDefault();
        const enviarEmail = await fetch('http://localhost:1234/verificarEmail', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const respuesta = await enviarEmail.json();

        const errorMsg = errorMessageTexto.current;
        const primerCont = primerContenedorRegistro.current;
        const segundoCont = segundoContenedorRegistro.current;
        const boton = botonContinuarUno.current;

        if (respuesta === true) {
            errorMsg.style.visibility = "visible";
        } else {
            errorMsg.style.visibility = "hidden";
            primerCont.style.display = "none"
            segundoCont.style.display = "flex"
            boton.disabled = true;
            boton.style.cursor = "default";
            boton.style.transform = "scale(1)"
        }
    }

    const [typeInput, setTypeInput] = useState("password");

    const mostrarContraseña = () => {
        const eyeCerrado = ojoCerrado.current;
        const eyeAbierto = ojoAbierto.current;
        eyeCerrado.style.display = "none";
        eyeAbierto.style.display = "inline";
        setTypeInput("text");
    }

    const ocultarContraseña = () => {
        const eyeCerrado = ojoCerrado.current;
        const eyeAbierto = ojoAbierto.current;
        eyeCerrado.style.display = "inline";
        eyeAbierto.style.display = "none";
        setTypeInput("password");
    }

    const [botonContinuarDosDisabled, setBotonContinuarDosDisabled] = useState(true);
    const verificarInputs = (user, pass, checked) => {
        const botonCont = botonContinuarDos.current;
        if ((checked === true) && (user.length >= 3) && (pass.length >= 8)) {
            setBotonContinuarDosDisabled(false);
            botonCont.style.backgroundColor = "#FF8E0A"
        } else {
            setBotonContinuarDosDisabled(true);
            botonCont.style.backgroundColor = "rgba(172, 171, 171, 0.603)"
        }
    }

    const [inputChecked, setInputChecked] = useState(false);
    const capturarInputCheck = (e) => {
        setInputChecked(e.target.checked);
        verificarInputs(nombreUsuario, contraseñaUsuario, e.target.checked);
    }

    const [nombreUsuario, setNombreUsuario] = useState('');
    const capturarNombreUsuario = (e) => {
        e.preventDefault();
        setNombreUsuario(e.target.value);
        verificarInputs(e.target.value, contraseñaUsuario, inputChecked);
    }

    const [contraseñaUsuario, setContraseñaUsuario] = useState('');
    const capturarContraseña = (e) => {
        e.preventDefault();
        setContraseñaUsuario(e.target.value);
        verificarInputs(nombreUsuario, e.target.value, inputChecked);
    }

    const enviarDatos = async (e) => {
        e.preventDefault();
        const usuarioExistente = segundoLabel.current;
        const verificarNombreUsuario = await fetch('http://localhost:1234/verificarNombreUsuario', {
            method: 'POST',
            body: JSON.stringify({ nombre_de_usuario: nombreUsuario }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resp = await verificarNombreUsuario.json();

        if (resp === true) {
            usuarioExistente.style.visibility = "visible";
        } else {
            const data = {
                email: email,
                nombre_de_usuario: nombreUsuario,
                contraseña: contraseñaUsuario
            }
            await fetch('http://localhost:1234/nuevousuario', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            router.push('/inicio');
        }
    }

    return (
        <section id={registroStyles.sectionRegistro}>
            <form id={registroStyles.formRegistro} >
                <div id={registroStyles.crearCuentaParrafo}>
                    <Link id={registroStyles.linkArrow} href={'/'}><Image
                        src='/flecha-atras.png'
                        width={25}
                        height={25}
                        alt="flecha-atras"
                        id={registroStyles.flechaAtrasImage}
                    />
                    </Link>
                    <p id={registroStyles.crearCuentaTitulo}>Crear cuenta </p>
                </div>
                <div id={registroStyles.contenedorPrimerRegistro} ref={primerContenedorRegistro}>
                    <label id={registroStyles.labelRegistro}>¿Cual es tu correo electrónico?</label>
                    <div id={registroStyles.contenedorInputBoton}>
                        <input className={registroStyles.inputRegistro} ref={inputEmail} autoFocus required type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={capturarEmail}></input>
                        <p className={registroStyles.errorMessage} ref={errorMessageTexto}>*El email ya está registrado</p>
                        <p>Deberás poder confirmarlo luego</p>
                        <button id={registroStyles.botonContinuar} ref={botonContinuarUno} onClick={verificarEmail} disabled={estadoBotonContinuar}>Continuar</button>
                    </div>
                </div>
                <div id={registroStyles.contenedorSegundoRegistro} ref={segundoContenedorRegistro}>
                    <h1 id={registroStyles.tituloNombreContraseña}>Ingresa un nombre de usuario y contraseña</h1>
                    <label className={registroStyles.labelSegundoRegistro}>Nombre de usuario:</label>
                    <input type="text" className={registroStyles.inputRegistro} minLength="3" onChange={capturarNombreUsuario}></input>
                    <p id={registroStyles.errorMsgNombre} ref={segundoLabel}>*Ya existe un usuario con ese nombre de usuario</p>
                    <label className={registroStyles.labelSegundoRegistro} id={registroStyles.segundoLabel}>Contraseña:</label>
                    <div id={registroStyles.contenedorDeInputContraseña}>
                        <input type={typeInput} className={registroStyles.inputRegistro} minLength="8" onChange={capturarContraseña}>
                        </input>
                        <Image
                            src='/ojo-cerrado.png'
                            width={25}
                            height={25}
                            alt="ojo-cerrado"
                            id={registroStyles.ojoCerradoImagen}
                            onClick={mostrarContraseña}
                            ref={ojoCerrado}
                        />
                        <Image
                            src='/ojo-abierto.png'
                            width={25}
                            height={25}
                            alt="ojo-cerrado"
                            id={registroStyles.ojoAbiertoImagen}
                            ref={ojoAbierto}
                            onClick={ocultarContraseña}
                        />
                    </div>
                    <p>Deberá contener al menos 8 caracteres</p>
                    <div id={registroStyles.terminosCondiciones}>
                        <input type="checkbox" id={registroStyles.checkBox} onChange={capturarInputCheck} /><p>He leído los <span className={registroStyles.terminosNaranja}>términos</span> y <span className={registroStyles.terminosNaranja}>condiciones</span></p>
                    </div>
                    <button id={registroStyles.botonContinuarDos} ref={botonContinuarDos} disabled={botonContinuarDosDisabled} onClick={enviarDatos}>Continuar</button>
                </div>
            </form>
        </section>
    )
}