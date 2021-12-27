import React from 'react';
import "./Footer.scss";

import { Link } from 'react-router-dom';

import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex">
                            <p>Buhoci 607085, Romania</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:40722111051">+40 722 111 051</a>
                        </div>
                        <div className="d-flex">
                            <button
                                className="clipboard-btn"
                                onClick={() => navigator.clipboard.writeText('EUROKITEMAILFILL@gmail.com')}
                            >
                                EUROKITEMAILFILL@gmail.com
                                <span class="tooltiptext"><FontAwesomeIcon className="clipboard-icon" icon={faClipboard} /></span>
                            </button>

                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <Link to="/" className="footer-nav">Home</Link>
                                <br />
                                <Link to="/about" className="footer-nav">About</Link>
                                <br />
                                <Link to="/products" className="footer-nav">Products</Link>
                            </div>
                            <div className="col">
                                <Link to="/accessories" className="footer-nav">Accessories</Link>
                                <br />
                                <Link to="/contact" className="footer-nav">Contact</Link>
                            </div>
                        </div>
                    </div>


                </div>
                <p className="pt-3 text-center">
                    Copyright&copy;
                    {new Date().getFullYear()}&nbsp;Euro Kit Hidraulica S. R. L. | All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
