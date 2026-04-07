import React from 'react'
import "../make/Contact.css"
import { MapPin, Mail, Phone } from "lucide-react";


function Contact() {
    return (
        <div className='contact'>
            <h1>Contact Us </h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className='jjk'>
                <div className='con-box-1'>
                    <input type="text" placeholder='Name' className='nor-in' />
                    <input type="email" placeholder='Email' className='nor-in' />
                    <textarea className="mssg-box" placeholder="Message"></textarea>
                    <input type="button" className='send-bttn' value="Send" />
                </div>
                <div className='con-box-2'>
                    <label><MapPin className='iconic' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at delectus porro nemo blanditiis in ipsam nobis quidem itaque reiciendis?</label>
                    <label><Mail className='iconic' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati expedita ullam aliquam blanditiis? Tempore tempora dolores ratione quis commodi.</label>
                    <label><Phone className='iconic' />+91XXXXXXXXX <br /> +91XXXXXXXXXX</label>
                </div>
            </div>
        </div>
    )
}

export default Contact
