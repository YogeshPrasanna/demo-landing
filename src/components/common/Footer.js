import React from 'react'
import Logo from "./Logo.png"

import { Linkedin, Facebook, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="footer footer-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-8 col-xs-6">
                    <span className="text-white float-left">
                    <img src={Logo} height="25px" alt="as"/>
                        &nbsp; &nbsp;Copyright 2019 ZETA. All Rights Reserved | Privacy Policy | Acceptable Use Policy
                    </span>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xs-6 ">
                        <span className="col-xs-12 custom-icons float-right"><Facebook /></span>
                        <span className="col-xs-12 custom-icons float-right"><Twitter /></span>
                        <span className="col-xs-12 custom-icons float-right"><Linkedin /></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer