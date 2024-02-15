import logoGithub from "../assets/github.png";
import logoLinkedin from "../assets/linkedin.png";
import meriFoto from "../assets/merifoto.jpg";
import abryFoto from "../assets/abrahamfoto.jpg";

function About() {
  return (
    <div>
      <h1>Descripcion del proyecto</h1>
      <hr />
      <p>
        "De Muerte: Cocina de Autor" es una aplicación web innovadora que
        combina la pasión por la cocina con la creatividad culinaria y el
        enfoque en la salud. Con un nombre intrigante, esta plataforma ofrece
        una experiencia única para los amantes de la gastronomía que buscan
        explorar nuevas y emocionantes formas de preparar alimentos nutritivos.
      </p>
      <p>
        La aplicación presenta recetas cuidadosamente seleccionadas y diseñadas
        por chefs expertos, que incorporan ingredientes frescos y saludables en
        combinaciones inesperadas y deliciosas. Desde platos principales hasta
        postres, cada receta en "De Muerte: Cocina de Autor" es una obra maestra
        culinaria que desafía las convenciones y estimula el paladar.
      </p>
      <hr />
      <h1>Creadores</h1>
      <hr />
      <p>
        Somos dos personas aprendiendo a programar, y esta es nuestra primera
        APP web con react, con la cual estamos aprendiendo mucho y probando
        cositas.
      </p>
      <p>Vamos a presentarnos:</p>
      <hr />
      <div>
        <div>
          <img src={meriFoto} alt="meri" width="200px" />
        </div>
        <div>
          <ul>
            <li>
              <h3>Meri: </h3>
              <p>
                soy una chica joven, alegre y mama, estudiando para trabajar
                desde casa y poder conciliar.
              </p>
            </li>
            <li>
              <a href="https://github.com/meritxellavila">
                <img src={logoGithub} alt="logo-github" width="50px" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/meritxell-avila-gonzalez-94844029b/">
                <img src={logoLinkedin} alt="logo-linkedin" width="70px" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <img src={abryFoto} alt="Abry" width="200px" />
      </div>
      <div>
        <ul>
          <li>
            <h3>Abraham: </h3>
            <p>
              por ahora soy un chico joven y anonimo al que le gusta la fiesta,
              practicar deportes y un poco cafre y estoy haciendo este curso
              para ver si encuentro un trabajo compatible con mi problema de
              salud.
            </p>
          </li>
          <li>
            <a href="https://github.com/Abranucu">
              <img src={logoGithub} alt="logo-github" width="50px" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abraham-castiello-barbas-0a9502217/">
              <img src={logoLinkedin} alt="logo-linkedin" width="70px" />
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default About;
