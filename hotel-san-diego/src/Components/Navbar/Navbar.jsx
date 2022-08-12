import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <a className="logo">Hotel California</a>
        </div>
        <div className="middle">
            <ul>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Music</a>
                <a href="">Contact</a>
            </ul>
        </div>
        <div className="right">
            <button className="btn buy-btn">
                order online
            </button>
            <button className="btn outline">
                cart
            </button>
        </div>
    </div>
  )
}

export default Navbar