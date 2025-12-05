import { Container, Row, Col } from "react-bootstrap"
import img1a from "../assets/images/1a.png"
import img1b from "../assets/images/1b.png"

function News() {
  return (
    <Container fluid className="p-4">
      <h1>Novità</h1>
      <hr />
      <Row className="g-3">
        {/* Prima colonna */}
        <Col xs={12} sm={6} className="text-start d-flex flex-column">
          <p className="small-text m-0">NUOVA STAZIONE RADIO</p>
          <h2 className="fs-6">
            Rilassati, al resto pensiamo noi. <br></br> Ascolta Apple Music
            Chill
          </h2>

          <div className="mt-auto">
            <img src={img1a} alt="immagine 1" className="img-fluid rounded-3" />
          </div>
        </Col>

        {/* Seconda colonna */}
        <Col xs={12} sm={6} className="text-start d-flex flex-column">
          <p className="small-text m-0">NUOVA STAZIONE RADIO</p>
          <h2 className="fs-6">Ecco la nuova casa della musica latina</h2>
          <div className="mt-auto">
            <img src={img1b} alt="immagine 2" className="img-fluid rounded-3" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default News
