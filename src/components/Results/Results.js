import React, { useState, useEffect } from "react"
import "./ResultsStyle.css"
import api from "../api"
import { Link, useParams } from "react-router-dom"
import Erreur from "../Erreur/Erreur"

const Results = () => {
  let { slug } = useParams()

  const [result, setResult] = useState(true)
  const [streamerInfo, setStreamerInfo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/users?login=${slug}`
      )
      //   console.log(result)
      if (result.data.data.length === 0) {
        setResult(false)
      } else {
        setStreamerInfo(result.data.data)
      }
    }
    fetchData()
  }, [slug])

  return result ? (
    <div>
      <div className="containerDecaleResultats">
        <h4>Résultats de recherche:</h4>
        {streamerInfo.map((stream, index) => (
          <div key={index} className="carteResultats">
            <img
              src={stream.profile_image_url}
              alt="resultat profile"
              className="imgCarte"
            />
            <div className="cardBodyResults">
              <h5 className="titreCartesStream"> {stream.display_name} </h5>
              <div className="txtResult"> {stream.description} </div>
            </div>
            <Link
              className="lien"
              to={{
                pathname: `/live/${stream.login}`,
              }}
            >
              <div className="btnCarte btnResult">
                Regarder {stream.display_name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Erreur />
  )
}

export default Results
