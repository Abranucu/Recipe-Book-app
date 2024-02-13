import logoLibro from "../assets/logoLibro.png"
import tituloLibro from "../assets/tituloLibro.png"

function Navbar() {
  return (
    <div>
      <img src={logoLibro} alt="logo" />
      <img src={tituloLibro} alt="titulo" />
    </div>
  )
}

export default Navbar