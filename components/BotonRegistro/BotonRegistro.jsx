import React from 'react'
import botonRegistroStyles from "../../styles/botonRegistro.module.css"

export default function BotonRegistro({ estilos }) {
    const estilosProps = {
        texto: estilos.texto,
        color: estilos.color,
        backgroundColor: estilos.backgroundColor,
        border: estilos.border,
    }
    return (
        <button className={botonRegistroStyles.botonesDeRegistro} style={estilosProps}>{estilosProps.texto}</button>
    )
}
