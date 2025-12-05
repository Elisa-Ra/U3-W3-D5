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
      {/* Layout desktop */}
      <div className="d-none d-md-block">
        {/* Sidebar fissa */}
        <div
          className="bg-dark text-white h-100 position-fixed top-0 start-0 p-3"
          style={{ minHeight: "100vh", width: "16.6%" }} // larghezza fissa
        >
          <MyNavbar />
        </div>

        {/* Contenuto principale con margin-left */}
        <div className="" style={{ marginLeft: "16.6%" }}>
          <Player />
          <News />
          <Radio />
          <NewSongs />
          <Others />
          <MyFooter />
        </div>
      </div>

      {/* Layout mobile */}
      <div className="d-md-none">
        <MyNavbar />
        <Player />
        <News />
        <Radio />
        <NewSongs />
        <Others />
        <MyFooter />
      </div>
    </>
  )
}

export default App
