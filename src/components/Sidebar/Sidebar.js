import React, { useEffect, useState } from "react";
import api from "../api";
import "./SidebarStyle.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [topStreams, setTopStreams] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const result = await api.get("https://api.twitch.tv/helix/streams");
      let dataArray = result.data.data;

      let gameIDs = dataArray.map((stream) => {
        return stream.game_id;
      });
      let userIDs = dataArray.map((stream) => {
        return stream.user_id;
      });

      // URL CUSTOM

      let baseUrlGames = "https://api.twitch.tv/helix/games?";
      let baseUrlUsers = "https://api.twitch.tv/helix/users?";

      let queryParamsGame = "";
      let queryParamsUsers = "";

      gameIDs.map((id) => {
        return (queryParamsGame = queryParamsGame + `id=${id}&`);
      });
      userIDs.map((id) => {
        return (queryParamsUsers = queryParamsUsers + `id=${id}&`);
      });

      // final URL

      let urlFinalGames = baseUrlGames + queryParamsGame;
      let urlFinalUsers = baseUrlUsers + queryParamsUsers;

      // Call

      let gamesNames = await api.get(urlFinalGames);
      let getUsers = await api.get(urlFinalUsers);

      let gamesNameArray = gamesNames.data.data;
      let arrayUsers = getUsers.data.data;

      // final array

      let finalArray = dataArray.map((stream) => {
        stream.gamesNames = "";
        stream.truePic = "";
        stream.login = "";

        gamesNameArray.forEach((name) => {
          arrayUsers.forEach((user) => {
            if (stream.user_id === user.id && stream.game_id === name.id) {
              stream.truePic = user.profile_image_url;
              stream.gameName = name.name;
              stream.login = user.login;
            }
          });
        });
        return stream;
      });
      setTopStreams(finalArray.slice(0, 6));
      setLoader(false);
    };
    fetchData();
  }, []);

  return (
    <div className="sidebar">
      <h2 className="titreSidebar">Chaînes recommandées</h2>
      {loader && (
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <ul className="listStream">
        {topStreams.map((stream, index) => (
          <Link
            className="lien"
            key={index}
            to={{
              pathname: `/live/${stream.login}`,
            }}
          >
            <li key={index} className="containerFlexSidebar">
              <img
                src={stream.truePic}
                alt="logo user"
                className="profilePicRonde"
              />
              <div className="streamUser">{stream.user_name}</div>
              <div className="viewerRight">
                <div className="pointRouge"></div>
                <div>{stream.viewer_count}</div>
              </div>
              <div className="gameNameSidebar">{stream.gameName}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
