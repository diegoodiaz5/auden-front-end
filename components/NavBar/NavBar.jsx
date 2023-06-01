'use client'

import React from 'react'
import nav from '../../styles/navBar.module.css'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavBar() {

    const ref = useRef();
    const home = React.useRef(null);
    const buscador = React.useRef(null);
    const perfil = React.useRef(null);
    const amigos = React.useRef(null);

    useEffect(() => {
        const path = window.location.pathname;
        const imgHome = home.current;
        const imgBuscador = buscador.current;
        const imgPerfil = perfil.current;
        const imgAmigos = amigos.current;

        switch (path) {
            case '/inicio':
                imgHome.src = 'home-icon-black.png';
                imgBuscador.src = 'buscador-icon-grey.png';
                imgPerfil.src = 'perfil-icon-grey.png';
                imgAmigos.src = 'amigos-icon-grey.png';
                break;
            case '/buscador':
                imgHome.src = 'home-icon-grey.png';
                imgBuscador.src = 'buscador-icon-black.png';
                imgPerfil.src = 'perfil-icon-grey.png';
                imgAmigos.src = 'amigos-icon-grey.png';
                break;
            case '/perfil':
                imgHome.src = 'home-icon-grey.png';
                imgBuscador.src = 'buscador-icon-grey.png';
                imgPerfil.src = 'perfil-icon-black.png';
                imgAmigos.src = 'amigos-icon-grey.png';
                break;
            case '/amigos':
                imgHome.src = 'home-icon-grey.png';
                imgBuscador.src = 'buscador-icon-grey.png';
                imgPerfil.src = 'perfil-icon-grey.png';
                imgAmigos.src = 'amigos-icon-amigos.png';
                break;
            default:
                imgHome.src = 'home-icon-grey.png';
                imgBuscador.src = 'buscador-icon-grey.png';
                imgPerfil.src = 'perfil-icon-grey.png';
                imgAmigos.src = 'amigos-icon-grey.png';
                break;
        }
    }, [])

    return (
        <nav id={nav.contenedor}>
            <li id={nav.list}>
                <ul>
                    <Link href={'/inicio'} className={nav.uls}>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt='home'
                            id='hola'
                            ref={home}
                        />
                        <p>Inicio</p>
                    </Link>
                </ul>
                <ul>
                    <Link href={'/buscador'} className={nav.uls}>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt='buscador'
                            ref={buscador}
                        />
                        <p>Buscador</p>
                    </Link>
                </ul>
                <ul>
                    <Link href={'/perfil'} className={nav.uls}>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt='perfil'
                            ref={perfil}
                        />
                        <p>Perfil</p>
                    </Link>
                </ul>
                <ul>
                    <Link href={'/amigos'} className={nav.uls}>
                        <Image
                            src=''
                            width={30}
                            height={30}
                            alt='amigos'
                            ref={amigos}
                        />
                        <p>Amigos</p>
                    </Link>
                </ul>
            </li>
        </nav >
    )
}
