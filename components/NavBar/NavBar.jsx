'use client'

import React from 'react'
import nav from '../../styles/navBar.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavBar() {


    const [imgHome, setImghome] = useState('/home-icon-black.png');
    const [imgBuscador, setImgBuscador] = useState('/buscador-icon-grey.png');
    const [imgPerfil, setImgPerfil] = useState('/perfil-icon-grey.png');
    const [imgAmigos, setImgAmigos] = useState('/amigos-icon-grey.png');

    useEffect(() => {
        const path = window.location.pathname;

        switch (path) {
            case '/inicio':
                setImghome('/home-icon-black.png');
                setImgBuscador('/buscador-icon-grey.png');
                setImgPerfil('/perfil-icon-grey.png');
                setImgAmigos('/amigos-icon-grey.png');
                break;
            case '/buscador':
                setImghome('/home-icon-grey.png');
                setImgBuscador('/buscador-icon-black.png');
                setImgPerfil('/perfil-icon-grey.png');
                setImgAmigos('/amigos-icon-grey.png');
                break;
            case '/perfil':
                setImghome('/home-icon-grey.png');
                setImgBuscador('/buscador-icon-grey.png');
                setImgPerfil('/perfil-icon-black.png');
                setImgAmigos('/amigos-icon-grey.png');
                break;
            case '/amigos':
                setImghome('/home-icon-grey.png');
                setImgBuscador('/buscador-icon-grey.png');
                setImgPerfil('/perfil-icon-grey.png');
                setImgAmigos('/amigos-icon-black.png');
                break;
            default:
                setImghome('/home-icon-grey.png');
                setImgBuscador('/buscador-icon-grey.png');
                setImgPerfil('/perfil-icon-grey.png');
                setImgAmigos('/amigos-icon-grey.png');
                break;
        }
    }, [])

    return (
        <nav id={nav.contenedor}>
            <li id={nav.list}>
                <ul>
                    <Link href={'/inicio'} className={nav.uls}>
                        <Image
                            src={imgHome}
                            width={30}
                            height={30}
                            alt='home'
                            id='hola'
                        />
                        <p>Inicio</p>
                    </Link>
                </ul>
                <ul>
                    <Link href={'/buscador'} className={nav.uls}>
                        <Image
                            src={imgBuscador}
                            width={30}
                            height={30}
                            alt='buscador'
                        />
                        <p>Buscador</p>
                    </Link>
                </ul>
                <ul>
                    <Link href={'/perfil'} className={nav.uls}>
                        <Image
                            src={imgPerfil}
                            width={30}
                            height={30}
                            alt='perfil'
                        />
                        <p>Perfil</p>
                    </Link>
                </ul>
                <ul>
                    <Link href={'/amigos'} className={nav.uls} id={nav.amigosImage}>
                        <Image
                            src={imgAmigos}
                            width={30}
                            height={30}
                            alt='amigos'
                        />
                        <p>Amigos</p>
                    </Link>
                </ul>
            </li>
        </nav >
    )
}
