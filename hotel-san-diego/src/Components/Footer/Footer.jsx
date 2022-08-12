import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="top">
            <div className="logo"></div>
        </div>
        <div className="middle">
            <div className="left">
                <p>Navigation</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Music</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="right">
                <p>How to Reach me</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat optio nemo iste ullam aut quos a error, ab vero dolor sapiente magni! Ad, deserunt ratione. Provident impedit officiis quae blanditiis?</p>
                <div className="social">Facebook</div>
                <div className="social">Instagram</div>
                <div className="social">Sound Cloud</div>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                Hotel California copy right 2022 - Web Design by David and Adi
            </div>
            <div className="right">
                <a href="">Privacy Policy</a>
                <a href="">Site Map</a>
            </div>
        </div>
    </div>
  )
}

export default Footer