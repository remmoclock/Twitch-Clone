import React from "react"
import logo from "./assets/IconeTwitch.svg"
import search from "./assets/Search.svg"
import menuIco from "./assets/MenuIco.svg"
import "./HeaderStyle.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="headerTop">
        <ul className="listeMenu">
          <li className="liensNav">
            <Link className="lien" to="/">
              <img src={logo} alt="logo twitch" className="logo" />
            </Link>
          </li>
          <Link className="lien" to="/">
          <li className="liensNav">Top Games</li>
          </Link>
          <Link className="lien" to="/top-streams">
          <li className="liensNav">Top Streams</li>
          </Link>
          <li className="liensNav">
            <form className="formSubmit">
              <input type="text" className="inputRecherche" />
              <button type="submit">
                <img src={search} alt="icone loupe" className="logoLoupe" />
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="menuResBtn">
        <img src={menuIco} alt="icone menu responsive" className="menuIco" />
      </div>
    </div>
  )
}

export default Header
