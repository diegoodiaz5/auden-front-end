'use client'

import React from "react";
import registroStyles from "../../../styles/registro.module.css"
import { useState } from "react";
import Image from 'next/image'
import Link from "next/link";

export default function Registro() {

    const botonContinuar = React.useRef(null);
    const inputEmail = React.useRef(null);

    const [email, setEmail] = useState('');
    const capturarEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        const input = inputEmail.current;
        const boton = botonContinuar.current;
        if (input.checkValidity()) {
            boton.disabled = false;
            boton.style.cursor = "pointer"
            boton.style.transform = "scale(1.025)"
        } else {
            boton.disabled = true;
            boton.style.cursor = "default";
            boton.style.transform = "scale(1)"
        };
    };

    const registrarEmail = async (data) => {
        const enviarDatos = await fetch('http://localhost:3001', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const respuesta = enviarDatos.json();
        if (respuesta) {

        }
    }

    return (
        <section id={registroStyles.sectionRegistro}>
            <form id={registroStyles.formRegistro} onSubmit={registrarEmail}>
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
                <label id={registroStyles.labelRegistro}>¿Cual es tu correo electrónico?</label>
                <div id={registroStyles.contenedorInputBoton}>
                    <input id={registroStyles.inputRegistro} ref={inputEmail} autoFocus required type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={capturarEmail}></input>
                    <p>Deberás poder confirmarlo luego</p>

                    <button id={registroStyles.botonContinuar} ref={botonContinuar} disabled>Continuar</button>
                </div>
            </form>
        </section>
    )
}