import React from "react";

function Row (props) {

    return (
        <div className="row-fluid">
            {props.children}
        </div>
    )
}

export default Row;