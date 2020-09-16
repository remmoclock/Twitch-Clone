import React from "react"
import "./SidebarStyle.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="titreSidebar">Chaînes recommandées</h2>
      <ul className="listStream"></ul>
    </div>
  )
}

export default Sidebar
