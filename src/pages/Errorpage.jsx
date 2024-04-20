import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import error404image from '../assets/404.png';


const ErrorPage = () => {
    return (
<div className="parent">
        <div class="first-child">
        <span id="heading">Something went wrong!</span>
        <span id="description">This is awkward!You entered a wrong URL..</span>
        <button id="gobackbutton">Go Back To Homepage</button>
        </div>
        <div className="second-child">
            <img src={error404image} alt="Error 404" height="506.93px" width="556.06px" />
        </div>
        </div>
      );
}
export default ErrorPage; 