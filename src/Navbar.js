import React from "react"

export default function NavBar ({openPopup}) {
    return <nav className = "nav">
    <h1 className= "site-title">NoteFusion</h1>
    <div className="nav-items">
    <ul>
        <a href = "/"><li>About us</li></a>
        <a href = "/"><li>Canvas</li></a>
        <button onClick={openPopup}>Login</button> 
    </ul>
    </div>
    </nav>
}