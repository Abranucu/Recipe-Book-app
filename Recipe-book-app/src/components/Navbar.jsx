import logoLibro from "../assets/logoLibro.png";
import tituloLibro from "../assets/tituloLibro.png";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logoLibro} alt="logo" />
      </div>
      <div className="titulo">
        <img src={tituloLibro} alt="titulo" />
      </div>
    </div>
  );
}

export default Navbar;
