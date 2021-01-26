import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div>
                Copyright @ 2021
            </div>
            <ul className="icons">
                <li className="icon">
                    <i className="fa fa-instagram" aria-hidden="true">
                    </i>
                </li>
                <li className="icon">
                    <i className="fa fa-twitter" aria-hidden="true">
                    </i>
                </li>
                <li className="icon">
                    <i className="fa fa-facebook-square" aria-hidden="true">
                    </i>
                </li>
                <li className="icon">
                    <i className="fa fa-telegram" aria-hidden="true">
                    </i>
                </li>
                <li className="icon">
                    <i className="fa fa-whatsapp" aria-hidden="true">
                    </i>
                </li>
            </ul>
        </div>
    );
}

export default Footer;