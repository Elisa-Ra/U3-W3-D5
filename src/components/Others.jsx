import { Container, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

function Others() {
  return (
    <Container fluid className="p-4">
      <h1>Altro da esplorare</h1>

      {/* Primo blocco */}
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

      {/* Secondo blocco */}
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

      {/* Terzo blocco */}
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
    </Container>
  )
}

export default Others
