import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./components/MyNavbar"
import News from "./components/News"
import Radio from "./components/Radio"
import NewSongs from "./components/NewSongs"
import Others from "./components/Others"
import MyFooter from "./components/MyFooter"
import Player from "./components/Player"
import { Row, Col } from "react-bootstrap"

function App() {
  return (
    <>
      <Row>
        <Col
          md={2}
          className="bg-dark text-white h-100 position-fixed top-0 start-0 p-3"
          style={{ minHeight: "100vh" }}
        >
          <MyNavbar />
        </Col>

        <Col md={{ span: 10, offset: 2 }} className="p-3">
          <Player />
          <News />
          <Radio />
          <NewSongs />
          <Others />
          <MyFooter />
        </Col>
      </Row>
    </>
  )
}

export default App
