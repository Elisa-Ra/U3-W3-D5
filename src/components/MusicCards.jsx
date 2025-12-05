import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faE } from "@fortawesome/free-solid-svg-icons"
import { Container } from "react-bootstrap"

export default function MusicCards({ cover, title, artist }) {
  return (
    <Container fluid className="text-center">
      <div className="mt-auto">
        <img src={cover} alt={title} className="img-fluid rounded-3" />
      </div>
      <Container
        fluid
        className="d-flex justify-content-between align-items-center p-0"
      >
        <p className="small-text m-0 d-inline">{title}</p>
        <small className="small-text">
          <FontAwesomeIcon
            icon={faE}
            className="text-dark  bg-secondary  rounded-2"
          />
        </small>
      </Container>
      <p className="small-text m-0 text-start">{artist}</p>
    </Container>
  )
}
