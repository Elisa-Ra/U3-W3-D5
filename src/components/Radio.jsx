import { Container, Row, Col } from "react-bootstrap"
import img2a from "../assets/images/2a.png"
import img2b from "../assets/images/2b.png"
import img2c from "../assets/images/2c.png"
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
        <Col xs={12} sm={4} className="text-start d-flex flex-column">
          <div className="mt-auto">
            <img src={img2a} alt="immagine 1" className="img-fluid rounded-3" />
          </div>
          <p className="small-text m-0">Prologo con Abuelo</p>
        </Col>

        {/* Seconda colonna */}
        <Col xs={12} sm={4} className="text-start d-flex flex-column">
          <div className="mt-auto">
            <img src={img2b} alt="immagine 2" className="img-fluid rounded-3" />
          </div>
          <p className="small-text m-0">The Wanderer</p>
        </Col>
        {/* Terza colonna */}
        <Col xs={12} sm={4} className="text-start d-flex flex-column">
          <div className="mt-auto">
            <img src={img2c} alt="immagine 3" className="img-fluid rounded-3" />
          </div>
          <p className="small-text m-0">Michael Bublé e Carly Pearce</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Radio
