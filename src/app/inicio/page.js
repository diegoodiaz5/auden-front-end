import React from 'react'
import inicio from '../../../styles/inicio.module.css'
import Image from 'next/image'
import NavBar from '../../../components/NavBar/NavBar'

export default function Inicio() {
    return (
        <main id={inicio.main}>
            <div id={inicio.primeraLinea}>
                <h1>Música Ya!</h1>
                <span>
                    <Image
                        src='/reciente.png'
                        width={32}
                        height={32}
                        alt='recientes'
                    />
                    <Image
                        src='/campana.png'
                        width={32}
                        height={32}
                        alt='campana'
                    />
                </span>
            </div>
            <div className={inicio.contenedoresDeSecciones}>
                <div className={inicio.contenedorNegro}>
                    <Image
                        src='/angel.png'
                        width={60}
                        height={70}
                        alt='angel'
                        id={inicio.angelImage}
                    />
                    <Image
                        src='/auriculares.png'
                        width={40}
                        height={40}
                        alt='auriculares'
                        id={inicio.auricularesImage}
                    />
                </div>
                <div className={inicio.contenedorTextos}>
                    <h2>Cupido Musical</h2>
                    <p className={inicio.textos}>Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
                </div>
            </div>
            <div className={inicio.contenedoresDeSecciones}>
                <div className={inicio.contenedorNegro}>
                    <div id={inicio.contenedorPregunta}>
                        <Image
                            src='/signo-pregunta2.png'
                            width={60}
                            height={60}
                            alt='signo-pregunta'
                            id={inicio.signoPregunta2}
                        />
                        <Image
                            src='/signo-pregunta.png'
                            width={60}
                            height={60}
                            alt='signo-pregunta'
                            id={inicio.signoPregunta}
                        />
                        <Image
                            src='/signo-pregunta3.png'
                            width={60}
                            height={60}
                            alt='signo-pregunta'
                            id={inicio.signoPregunta3}
                        />
                    </div>
                    <Image
                        src='/mapa.png'
                        width={40}
                        height={40}
                        alt='auriculares'
                        id={inicio.mapaImagen}
                    />
                </div>
                <div className={inicio.contenedorTextos}>
                    <h2>Música Contextual</h2>
                    <p className={inicio.textos}>Creamos la playlist perfecta para cualquier situación.</p>
                </div>
            </div>
            <NavBar />
        </main>
    )
}
