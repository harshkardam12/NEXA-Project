import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import "../make/Footer.css"
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-head'>
                <h1>NEXA</h1>
                <p>Innovation at the intersection of technoogy and vision</p>
            </div>
            <div className='footer-label' >
                <div className='line1'>

                    <h2>Company</h2>
                    <h3>ABOUT</h3>
                    <h3>CAREERS</h3>
                    <h3>BLOG</h3>

                </div>
                <div className='line1'>
                    <h2>Quick Links</h2>
                    <h3>HOME</h3>
                    <h3>FEATURE</h3>
                    <h3>SERVICES</h3>
                </div>
                <div className='line1'>
                    <h2>Support</h2>
                    <h3>HELP CENTER</h3>
                    <h3>FAQs</h3>
                    <h3>SUPPORT</h3>
                </div>
                <div className='line2'>
                    <h2>Contact</h2>

                    <div className='icons-box'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className='footer-icon' />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='footer-icon' />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='footer-icon' />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='footer-icon' />
                        </a>
                    </div>

                </div>

            </div>
            <div className='footer-last'>
                <div> <p>© 2024 NEXA. All rights reserved.</p></div>
                <div className='h32'>
                    <h3>PRIVACY POLICY</h3>
                    <h3>TERM OF SERVICES</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
