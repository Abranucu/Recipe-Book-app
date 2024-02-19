import logoApp from "../assets/logoApp.png";
import logoHome from "../assets/home.png";
import logoAbout from "../assets/about.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import nombreApp from "../assets/nombreApp.png";

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container fluid>
            <Navbar.Brand>
              <img
                src={logoApp}
                alt="logo"
                width="50px"
                style={{ marginRight: "10px" }}
              />
              <img src={nombreApp} alt="logo" width="100px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={logoApp}
                    alt="logo"
                    width="100px"
                    style={{ marginRight: "30px" }}
                  />
                  <img src={nombreApp} alt="logo" width="200px" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <hr />
                  <Link to={"/"}>
                    <img src={logoHome} alt="home" width="50px" />
                  </Link>
                  <hr />
                  <Link to={"/about"}>
                    <img src={logoAbout} alt="about" width="50px" />
                  </Link>
                  <hr />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;

// <img src={logoLibro} alt="logo" width="50px" />
