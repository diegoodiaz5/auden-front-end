import React from 'react'
import modalStyles from '../../styles/modalRecovery.module.css'
import Image from 'next/image'

export default function ModalRecovery({ mostrarModal, email, mostrarIniciarSesion }) {
    const accionOnClick = () => {
        mostrarModal();
        mostrarIniciarSesion();
    }
    return (
        <div id={modalStyles.contenedorModal}>
            <div id={modalStyles.subcontenedorModal}>
                <p className={modalStyles.textosModal}>Te enviamos mensaje a <span>{email}</span> con un link verificador.</p>
                <Image
                    src='/tick.png'
                    width={80}
                    height={80}
                    alt='tick-image'
                />
                <p className={modalStyles.textosModal}>Para recuperar tu cuenta debes ingresar al mismo y
                    luego seguir las instrucciones</p>
                <button id={modalStyles.botonEntendido} onClick={accionOnClick} >Entendido</button>
            </div>

        </div>
    )
}
