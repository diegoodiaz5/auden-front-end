import homeStyles from "../../styles/home.module.css"
import "../../styles/globals.css"
import { josefinSans } from "./fonts.js"
import BotonRegistro from "../../components/BotonRegistro/BotonRegistro"

export default function Home() {

  const botonRegistro = {
    texto: 'Registrarse Gratis',
    color: 'white',
    backgroundColor: '#FF8E0A',
    border: 'none',
  }

  const botonGoogle = {
    texto: 'Continuar con Google',
    color: '#26262E',
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    border: '2px solid black',
  }

  const botonApple = {
    texto: 'Continuar con Apple',
    color: '#26262E',
    backgroundColor: 'rgba(255, 255, 255, 0.61)',
    border: '2px solid black',
  }

  return (
    <main className={homeStyles.main}>
      <div id={homeStyles.contenedorNegro}>
        <h1 id={homeStyles.logoAUDN} className={josefinSans.className}>audn</h1>
      </div>
      <h2 id={homeStyles.musicaMedida}>Música a medida</h2>
      <div id={homeStyles.contenedorFinalHome}>
        <div id={homeStyles.contenedorDeBotones}>
          <BotonRegistro estilos={botonRegistro} />
          <BotonRegistro estilos={botonGoogle} />
          <BotonRegistro estilos={botonApple} />
        </div>
        <p id={homeStyles.iniciarSesion}>Iniciar sesión</p>
      </div>
    </main>
  )
}

