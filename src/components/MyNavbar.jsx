import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  InputGroup,
  Form,
} from "react-bootstrap"
import appleLogo from "../assets/logos/music.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faHome,
  faThLarge,
  faRss,
} from "@fortawesome/free-solid-svg-icons"

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

            {/* Colonna centrale logo */}
            <Col xs={4} className="text-center">
              <Navbar.Brand href="#">
                <img src={appleLogo} alt="apple-logo" className="logo-white" />
              </Navbar.Brand>
            </Col>

            {/* Colonna destra */}
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
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Novità</Nav.Link>
              <Nav.Link href="#">Radio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* NAVBAR PER SCHERMI MEDI IN POI */}
      <Container fluid className="d-none d-md-block">
        <Row>
          <Col
            md={2} // larghezza colonna (2/12)
            className="navbar-color text-white h-100 position-fixed top-0 start-0 d-flex flex-column p-3"
            style={{ minHeight: "100vh" }} // assicura altezza piena viewport
          >
            <Navbar.Brand href="#" className="mb-4 text-start">
              <img src={appleLogo} alt="apple-logo" className="logo-white" />
            </Navbar.Brand>
            <Nav className="flex-column gap-2">
              <InputGroup>
                <InputGroup.Text className="bg-dark text-danger border-secondary py-0">
                  <FontAwesomeIcon icon={faSearch} size="sm" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Cerca"
                  data-bs-theme="dark"
                  className="border-secondary py-0"
                />
              </InputGroup>

              <Nav.Link href="#" className="text-white p-0">
                <FontAwesomeIcon
                  icon={faHome}
                  size="sm"
                  className="text-danger"
                />{" "}
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0">
                <FontAwesomeIcon
                  icon={faThLarge}
                  size="sm"
                  className="text-danger"
                />{" "}
                Novità
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0">
                <FontAwesomeIcon
                  icon={faRss}
                  size="sm"
                  className="text-danger"
                />{" "}
                Radio
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyNavbar
