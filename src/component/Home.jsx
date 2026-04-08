import React from 'react'
import '../make/Home.css'
import { Link } from "react-router-dom";
import img4 from "../asset/web host.jpg"

function Home() {

  

  return (
    <div className='home'>
      <div className='home1'>
        <h1>Welcome to <br />NEXA</h1>
        <p>Future being here</p>
        <button className='explore-bttn'>Explore</button>
      </div>

      <div className='home2'>
        <div>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

          <Link
            to="/abo"
            className="know-more"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"  // ← slow & smooth
              });
            }}
          >
            know more ➜
          </Link>
        </div>

        <div>
          <img src={img4} alt="" className='host' />
        </div>
      </div>
    </div>
  );
}

export default Home;
