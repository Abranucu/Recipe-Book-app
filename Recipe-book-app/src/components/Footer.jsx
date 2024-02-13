import github from "../assets/github.png"

function Footer() {
  return (
    <div>
        <a href="https://github.com/Abranucu/Recipe-Book-app.git">
        <img src={github} alt="github" width={"50px"} />
        <h1>Visita nuestro GitHub</h1>
        </a>
    </div>
  )
}

export default Footer