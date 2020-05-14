import React from "react";
import "./style.css";
import boyReading from "../../assets/boyReading.jpg";

function Jumbotron( props ) {
    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
            <div className="container text-center">
                {props.children}
            </div>
        </div>
    );
}

export default Jumbotron;