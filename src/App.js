import React from "react"
import "./App.css"
import Games from "./components/Games/Games"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Live from "./components/Live/Live"
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
          <Route exact path="/live/:slug" component={Live} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
