import React from 'react'
import cupido from "../../../styles/cupido.module.css"
import ModalCupido from '../../../components/ModalCupido/ModalCupido'

export default function page() {
    return (
        <>
            <ModalCupido />
            <div id={cupido.page}>page</div>
        </>
    )
}
