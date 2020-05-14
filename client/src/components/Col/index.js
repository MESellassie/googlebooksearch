import React from "react";

function Col (props) {

    return (
        <div className="col-sm-12">
            {props.children}
        </div>
    )
}

export default Col;