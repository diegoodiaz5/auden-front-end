import React from 'react'
import "./BotonRegistro.css"

export default function BotonRegistro({ estilos }) {
    const estilosProps = {
        texto: estilos.texto,
        color: estilos.color,
        backgroundColor: estilos.backgroundColor,
        border: estilos.border,
    }
    return (
        <button className='botonesDeRegistro' style={estilosProps}>{estilosProps.texto}</button>
    )
}
