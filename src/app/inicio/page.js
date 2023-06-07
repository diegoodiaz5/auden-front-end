import React from 'react'
import inicio from '../../../styles/inicio.module.css'
import Image from 'next/image'
import NavBar from '../../../components/NavBar/NavBar'
import Link from 'next/link'

export default function Inicio() {
    return (
        <main id={inicio.main}>
            <div id={inicio.primeraLinea}>
                <h1 id={inicio.musicaYa}>Música Ya!</h1>
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
            <Link href={'/cupido'} className={inicio.links}>
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
                        <h2 className={inicio.textosH2}>Cupido Musical</h2>
                        <p className={inicio.textos}>Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
                    </div>
                </div>
            </Link>
            <div className={inicio.contenedoresDeSecciones}>
                <div className={inicio.contenedorNegro}>
                    <Image
                        src='/signo-pregunta.png'
                        width={60}
                        height={70}
                        alt='signo-pregunta'
                        id={inicio.signoPregunta}
                    />

                    <Image
                        src='/mapa.png'
                        width={40}
                        height={40}
                        alt='auriculares'
                        id={inicio.mapaImagen}
                    />
                </div>
                <div className={inicio.contenedorTextos}>
                    <h2 className={inicio.textosH2}>Música Contextual</h2>
                    <p className={inicio.textos}>Creamos la playlist perfecta para cualquier situación.</p>
                </div>
            </div>
            <NavBar />
        </main>
    )
}
