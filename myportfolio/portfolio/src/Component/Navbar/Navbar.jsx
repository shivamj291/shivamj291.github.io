import "./Navbar.css"
import React from "react"
function Navbar(){
    return(
        <div id="nav-menu">
            <a href="#home" style={{textDecoration:"none",color:"white"}}  class="nav-link home">home</a>
            <a href="#about" style={{textDecoration:"none",color:"white"}}  class="nav-link about">about</a>
            <a href="#skills"  style={{textDecoration:"none",color:"white"}} class="nav-link skills">skills</a>
            <a href="#projects" style={{textDecoration:"none",color:"white"}} class="nav-link projects">projects</a>
            <a href="#contact" style={{textDecoration:"none",color:"white"}} class="nav-link contact">contact</a>
            <a href="#resume" style={{textDecoration:"none",color:"white"}} class="nav-link resume">resume</a>
        </div>
    )
}
export default Navbar