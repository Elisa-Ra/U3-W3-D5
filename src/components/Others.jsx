import { Container, Row, Col, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

function Others() {
  return (
    <Container fluid className="p-4">
      <h1>Altro da esplorare</h1>

      <Row className="gy-3">
        {" "}
        {/* Primo blocco */}
        <Col xs={12} md={4}>
          <ListGroup className="d-flex flex-column gap-2 mb-2">
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Esplora per genere</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Decenni</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Attività e stati d'animo</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* Secondo blocco */}
        <Col xs={12} md={4}>
          <ListGroup className="d-flex flex-column gap-2 mb-2">
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Worldwide</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Classifiche</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Audio spaziale</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* Terzo blocco */}
        <Col xs={12} md={4}>
          <ListGroup className="d-flex flex-column gap-2">
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Video musicali</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Nuovi artisti</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#"
              className="navbar-color text-danger border-0 rounded-3 d-flex justify-content-between align-items-center"
            >
              <span className="text-start">Hit del passato</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Others
