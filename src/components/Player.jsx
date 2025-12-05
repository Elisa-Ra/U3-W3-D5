import { Container, Row, Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMusic,
  faForward,
  faPlay,
  faBackward,
  faShuffle,
  faRepeat,
  faVolumeHigh,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import appleIcon from "../assets/logos/apple.svg"
import Form from "react-bootstrap/Form"

const Player = () => {
  return (
    <>
      {/* PLAYER PICCOLO */}
      <Container
        fluid
        className="d-md-none w-75 bg-dark position-fixed bottom-0 start-50 translate-middle-x rounded-4"
      >
        <Row className="d-flex justify-content-between p-3">
          <Col xs="auto">
            <span className="p-2 border border-3 border-secondary rounded-3 bg-secondary">
              <FontAwesomeIcon icon={faMusic} />
            </span>
          </Col>
          <Col xs="auto" className="d-flex gap-3 justify-content-end">
            <FontAwesomeIcon icon={faPlay} size="lg" />
            <FontAwesomeIcon icon={faForward} size="lg" />
          </Col>
        </Row>
      </Container>

      {/* PLAYER DA SCHERMO MEDIO IN POI  */}
      <Container fluid className="d-none d-md-block  navbar-color">
        <Row className="px-3 justify-content-center align-items-center text-center small-text">
          {/* PRIMA COLONNA */}
          <Col xs={3} className="d-flex justify-content-center gap-3 ">
            <FontAwesomeIcon icon={faShuffle} size="lg" />
            <FontAwesomeIcon icon={faBackward} size="lg" />
            <FontAwesomeIcon icon={faPlay} size="lg" />
            <FontAwesomeIcon icon={faForward} size="lg" />
            <FontAwesomeIcon icon={faRepeat} size="lg" />
          </Col>
          <Col
            xs={4}
            className="bg-secondary text-center d-flex justify-content-center"
          >
            <img
              src={appleIcon}
              alt="apple-logo"
              className="logo-white small-text"
            />
          </Col>
          <Col
            xs={3}
            className="d-flex justify-content-center align-items-center gap-2 "
          >
            <FontAwesomeIcon icon={faVolumeHigh} />
            <Form.Range className="w-50 " />
          </Col>

          <Col xs={2} className="d-flex justify-content-center">
            <Button variant="danger" className="my-2 py-0 small-text" size="sm">
              <FontAwesomeIcon icon={faUser} /> {""}
              Accedi
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Player
