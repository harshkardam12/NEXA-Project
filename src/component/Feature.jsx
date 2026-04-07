// Feature.jsx
import React from 'react'
import '../make/Feature.css'

// icons from react-icons (Font Awesome)
import { FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

function Feature() {
  return (
    <div className='feature'>
      <h1>Feature</h1>

      <div className="feature-items">

        {/* 1st item */}
        <div className="feature-item">
          <div className="feature-box">
            <FaLightbulb className="feature-icon" />
            <div className="feature-label-inside">Innovation</div>
          </div>
          <div className="feature-count">500+</div>
          <div className="feature-label-outside">Users</div>
        </div>

        {/* 2nd item */}
        <div className="feature-item">
          <div className="feature-box">
            <FaRocket className="feature-icon" />
            <div className="feature-label-inside">Cutting‑edge</div>
          </div>
          <div className="feature-count">12</div>
          <div className="feature-label-outside">Awards</div>
        </div>

        {/* 3rd item */}
        <div className="feature-item">
          <div className="feature-box">
            <FaHandshake className="feature-icon" />
            <div className="feature-label-inside">Collaboration</div>
          </div>
          <div className="feature-count">10+</div>
          <div className="feature-label-outside">Partners</div>
        </div>

      </div>
    </div>
  )
}

export default Feature
