import React from 'react';
import './login.css';
import imageo from "./img/vr.jpg"
import video1 from "./img/cosmic.mp4"
import triangle from "./img/triangle.png"
function Login() {

		return (
<div className="Login">

<div className="all">
    <video   muted autoPlay loop>
  <source  src={video1} type="video/mp4"/></video>

  <img className="triangle" src={triangle} alt=""/>

  <a href="/"><div className="textp">PLAY IN VR</div></a>


<img className="imgvr" src={imageo} alt=""/>

</div>
</div>
	);
}

export default Login;
