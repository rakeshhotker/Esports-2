import React from 'react'
import "./fotter.css"
function Fotter() {
    return (
        <div className="footer-all">
        <footer>
            <div className="container">
                <div className="aboutus">
                    <h2>About us</h2>
                    <p>

                    Hey varun,
                    Hope you had a great start to the week. We wanted to take some time to 
                    let you know of a great opportunity to not only learn but earn and excel
                    while working on tech that's the talk of the town. Over the past few months,
                    rypto has seen a meteoric rise in mainstream consciousness but with surprisingly 
                    few opportunities for interested folks to break into it. This makes us all the more
                    </p>
                    <ul className="sci">
                    <li><a href="#"><i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-handshake-o fa-lg" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="quicklinks">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">PRIVACY POLICY</a></li>
                    <li><a href="#">TERMS & CONDITION</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">HELP</a></li>
                </ul>

                </div>
                <div className="contact-info">
                    <h2>Contact us</h2>
                    <ul className="info">
                    <li>
                        <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span>Manhattan, located at 200 Park Avenue </span>
                    </li>
                    <li>
                        <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                        <span>Riotgamer@gmail.com</span>
                    </li>
                    <li>
                        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                        <span>+11 9878 7768 44</span>
                    </li>

                    </ul>
                </div>
            </div>

        </footer>
        </div>
    )
}

export default Fotter
