import React from "react"
import "./App.css"
import Games from "./components/Games/Games"
import GameStream from "./components/GameStream/GameStream"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Live from "./components/Live/Live"
import Results from "./components/Results/Results"
import TopStreams from "./components/TopStreams/TopStreams"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/top-streams" component={TopStreams} />
          <Route exact path="/resultats/:slug" component={Results} />
          <Route exact path="/live/:slug" component={Live} />
          <Route exact path="/game/:slug" component={GameStream} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
