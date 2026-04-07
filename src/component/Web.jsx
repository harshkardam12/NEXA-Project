import React from 'react'
import Earth from "../asset/EARTH.png"
import "../make/Web.css"
function Web() {
  return (
    <div className='web-main'>
      <div className='web-container'>
        <div className='web-container-text'>
          <h1>Web Development</h1>
          <h3>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network)</h3>

          <p>Lorem ipsum, dolor sit amet consecteturFuga beatae illum ut deserunt, repudiandae assumenda, esse earum incidunt, animi eum inventore cumque dolorum nostrum consectetur delectus tempora et pariatur dolor?</p>
          <a href="#contact" class="nexa-btn">
            Get Started with Nexa
          </a>
        </div>
        <div className='web-container-img'>
          <img src={Earth} alt="Web Development Planet" className='planet' />
        </div>

      </div>
      <div className="web-middle">

      </div>
    </div>
  )
}

export default Web
