import React, { useEffect, useState } from "react"
import api from "../api"
import "./SidebarStyle.css"

const Sidebar = () => {
  const [topStreams, setTopStreams] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/streams")
      let dataArray = result.data.data

      let gameIDs = dataArray.map((stream) => {
        return stream.game_id
      })
      let userIDs = dataArray.map((stream) => {
        return stream.user_id
      })

      // URL CUSTOM

      let baseUrlGames = "https://api.twitch.tv/helix/games?"
      let baseUrlUsers = "https://api.twitch.tv/helix/users?"

      let queryParamsGame = ""
      let queryParamsUsers = ""

      gameIDs.map((id) => {
        return (queryParamsGame = queryParamsGame + `id=${id}&`)
      })
      userIDs.map((id) => {
        return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
      })

      // final URL

      let urlFinalGames = baseUrlGames + queryParamsGame
      let urlFinalUsers = baseUrlUsers + queryParamsUsers

      // Call

      let gamesNames = await api.get(urlFinalGames)
      let getUsers = await api.get(urlFinalUsers)

      let gamesNameArray = gamesNames.data.data
      let arrayUsers = getUsers.data.data

      // final array

      let finalArray = dataArray.map((stream) => {
        stream.gamesNames = ""
        stream.truePic = ""
        stream.login = ""

        gamesNameArray.forEach((name) => {
          arrayUsers.forEach((user) => {
            if (stream.user_id === user.id && stream.game_id === name.id) {
              stream.truePic = user.profile_image_url
              stream.gameName = name.name
              stream.login = user.login
            }
          })
        })
        return stream
      })
      setTopStreams(finalArray.slice(0, 6))
    }
    fetchData()
  }, [])


  return (
    <div className="sidebar">
      <h2 className="titreSidebar">Chaînes recommandées</h2>
      <ul className="listStream"></ul>
    </div>
  )
}

export default Sidebar
