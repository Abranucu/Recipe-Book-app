import logoGithub from "../assets/github.png";

function Footer() {
  return (
    <div>
      <a href="https://github.com/Abranucu/Recipe-Book-app.git">
        <img
          src={logoGithub}
          alt="logo-github"
          width="50px"
          style={{ margin: "5px" }}
        />
        <h1>Visita nuestro GitHub</h1>
      </a>
    </div>
  );
}

export default Footer;
