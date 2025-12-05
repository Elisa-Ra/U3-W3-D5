import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import appleLogo from "../assets/logos/music.svg"

function MyNavbar() {
  return (
    <>
      {/* NAVBAR PER MOBILE */}
      <Navbar
        expand="lg"
        className="navbar-color d-md-none"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Row className="w-100 align-items-center">
            {/* Colonna sinistra toggle */}
            <Col xs={4} className="text-start">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="border-0"
              >
                <i className="bi bi-list text-danger fs-3"></i>
              </Navbar.Toggle>
            </Col>

            {/* Colonna centralelogo */}
            <Col xs={4} className="text-center">
              <Navbar.Brand href="#home">
                <img src={appleLogo} alt="apple-logo" className="logo-white" />
              </Navbar.Brand>
            </Col>

            {/* Colonna destra*/}
            <Col xs={4} className="text-end">
              <Nav>
                <Nav.Link href="#" className="text-danger">
                  Accedi
                </Nav.Link>
              </Nav>
            </Col>
          </Row>

          {/* Collapse con i link del menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#novita">Novità</Nav.Link>
              <Nav.Link href="#radio">Radio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* NAVBAR PER SCHERMI MEDI */}
    </>
  )
}

export default MyNavbar
