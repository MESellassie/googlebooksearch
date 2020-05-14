import React from "react";

function Footer(props) {
    return (
        <footer className="page-footer font-small pt-4">
            <div className="footer-copyright text-center py-3">&#169; 2020 Copyright: MESellassie </div>
            
            {props.children}
        </footer>

    );

}

export default Footer;