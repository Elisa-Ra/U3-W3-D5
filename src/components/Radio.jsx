import { Container, Row, Col } from "react-bootstrap"
import img2a from "../assets/images/2a.png"
import img2b from "../assets/images/2b.png"
import img2c from "../assets/images/2c.png"
import img2d from "../assets/images/2d.png"
import img2e from "../assets/images/2e.png"
import img2f from "../assets/images/2f.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

function Radio() {
  return (
    <Container fluid className="p-4">
      <h1>
        Nuovi episodi radio <FontAwesomeIcon icon={faAngleRight} />
      </h1>
      <hr />
      <Row className="g-3">
        {/* Prima colonna */}
        <Col xs={12} sm={4} md={2} className="text-start d-flex flex-column">
          <img src={img2a} alt="immagine 1" className="img-fluid rounded-3" />
          <p className="small-text m-0">Prologo con Abuelo</p>
        </Col>

        {/* Seconda colonna */}
        <Col xs={12} sm={4} md={2} className="text-start d-flex flex-column">
          <img src={img2b} alt="immagine 2" className="img-fluid rounded-3" />
          <p className="small-text m-0">The Wanderer</p>
        </Col>

        {/* Terza colonna */}
        <Col xs={12} sm={4} md={2} className="text-start d-flex flex-column">
          <img src={img2c} alt="immagine 3" className="img-fluid rounded-3" />
          <p className="small-text m-0">Michael Bublé e Carly Pearce</p>
        </Col>

        {/* Quarta colonna  */}
        <Col xs={12} md={2} className="d-none d-md-flex text-start flex-column">
          <img src={img2d} alt="immagine 4" className="img-fluid rounded-3" />
          <p className="small-text m-0">Michael Bublé e Carly Pearce</p>
        </Col>

        {/* Quinta colonna  */}
        <Col xs={12} md={2} className="d-none d-md-flex text-start flex-column">
          <img src={img2e} alt="immagine 5" className="img-fluid rounded-3" />
          <p className="small-text m-0">Michael Bublé e Carly Pearce</p>
        </Col>
        {/* Sesta colonna  */}
        <Col xs={12} md={2} className="d-none d-md-flex text-start flex-column">
          <img src={img2f} alt="immagine 6" className="img-fluid rounded-3" />
          <p className="small-text m-0">Non si vede nel mockup ma esiste</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Radio
