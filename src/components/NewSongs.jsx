import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import MusicCards from "./MusicCards"
import Loading from "./Loading"
import Error from "./Error"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const baseUrlSearch =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q="

export default function NewSongs() {
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchSongs = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const res = await fetch(baseUrlSearch + "abba")
        if (!res.ok) throw new Error("Errore nella risposta")

        const data = await res.json()
        setSongs(data.data.slice(0, 10)) // prendo le prime 10 canzoni
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSongs()
  }, [])

  return (
    <Container fluid className="p-4">
      {isLoading && <Loading />}
      {isError && <Error />}
      <h1 className="text-white">
        Nuove uscite <FontAwesomeIcon icon={faAngleRight} />
      </h1>
      {/* Su schermi piccoli ci sono 3 colonne per riga e da schermi medi in poi ci sono 5 colonne */}
      <Row className="g-3 row-cols-3 row-cols-md-5">
        {songs.map((song) => (
          <Col key={song.id}>
            <MusicCards
              cover={song.album.cover_medium}
              title={song.title}
              artist={song.artist.name}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
