import React from 'react'
import "../make/Gallery.css"
import img1 from "../asset/lock.jpg"
import img2 from "../asset/teck.jpg"
import img3 from "../asset/hand.jpg"
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className='gally'>
      <h1>GALLERY</h1>
      <div className='img-section'>
        <img src={img1} alt="" className='gally-img' />
        <img src={img2} alt="" className='gally-img' />
        <img src={img3} alt="" className='gally-img' />
      </div>
      <div className='option'>
        <h2>Have a question ?</h2>
        <Link
          to="/con"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"  // ← slow & smooth
            });
          }}
        >
          <button>Contact Us</button>

        </Link>
      </div>
    </div>
  )
}

export default Gallery
