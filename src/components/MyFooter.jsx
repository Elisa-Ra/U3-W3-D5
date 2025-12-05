import Container from "react-bootstrap/Container"

const MyFooter = () => {
  return (
    <>
      <footer className="navbar-color text-whitetext-start mt-3 pb-5 pt-3 py-2 w-100">
        <Container fluid className="text-start">
          <small className="d-block mb-2">
            {" "}
            Italia | English &#40;UK&#41;{" "}
          </small>
          <small className="d-block">
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </small>
          <small className="d-block">
            <a href="#" className="text-white text-decoration-none">
              Condizioni dei servizi internet
            </a>{" "}
            |{" "}
            <a href="#" className="text-white text-decoration-none">
              Apple Music e privacy{" "}
            </a>
            |{" "}
            <a href="#" className="text-white text-decoration-none">
              Avviso sui cookie{" "}
            </a>{" "}
            |
            <a href="#" className="text-white text-decoration-none">
              {" "}
              Supporto{" "}
            </a>
            |
            <a href="#" className="text-white text-decoration-none">
              {" "}
              Feedback
            </a>
          </small>
        </Container>
      </footer>
    </>
  )
}

export default MyFooter
