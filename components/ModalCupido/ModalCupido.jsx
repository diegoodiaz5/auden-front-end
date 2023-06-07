'use client'

import React, { useState } from 'react'
import modalCupido from "../../styles/modalCupido.module.css"
import Image from 'next/image'
import { headers } from 'next/dist/client/components/headers';

export default function ModalCupido({ id }) {
    const [modal, setModal] = useState();

    const cerrarModal = () => {
        setModal(false);
    }

    const mostrarModalFetch = async () => {
        const res = await fetch('http://localhost:1234/usuarioPorId',
            {
                method: "POST",
                body: JSON.stringify({ user_id: id }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const respJSON = await res.json();
        const modal1 = respJSON.modal1;
        setModal(modal1);
    }

    mostrarModalFetch();

    const noVolverAMostrar = async () => {
        const res = await fetch('http://localhost:1234/modalUno', {
            method: "PATCH",
            body: JSON.stringify({ user_id: id }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resJSON = await res.json();
        const patched = resJSON.patched;
        setModal(!patched);
    }

    return (
        modal && (<div id={modalCupido.contenedor}>
            <div id={modalCupido.subContenedor}>
                <div>
                    <h1 id={modalCupido.tituloCulpido}>Cupido Musical</h1>
                    <div id={modalCupido.contenedorImagen}>
                        <Image
                            width={80}
                            height={80}
                            src={"/cupidoDefaultImage.png"}
                            alt='icon-image'

                        />
                    </div>
                </div>
                <p id={modalCupido.textoInfo}>Luego de al menos 2 me gusta, confirma tu selección
                    y crearemos una playlist rápida con los artistas que
                    fueron un match
                </p>
                <button id={modalCupido.boton} onClick={cerrarModal}>Entendido</button>
                <p onClick={noVolverAMostrar}>Volver a mostrar</p>
            </div>
        </div>))

}
