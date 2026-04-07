import React from "react";
import { Link } from "react-router-dom";
import "../make/Service.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="blue-light"></div>
      <h1 className="service-title">Our Services</h1>
      <p className="service-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate.
      </p>

      <div className="service-cards">

        <Link to="/web" className="service-card-link">
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGWHihJR1zgNJf6H0tql4eO9a1Q-E0wXXmQ&s" alt="" className="fa-cogs" />
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        <Link to="/ui-ux-design" className="service-card-link">
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPX-BQmMS_Fw6lSrVqReXT1t5QdV00yYXTw&s" alt="" className="fa-users" />
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        <Link to="/digital-marketing" className="service-card-link">
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPX-BQmMS_Fw6lSrVqReXT1t5QdV00yYXTw&s" alt="" className="fa-drafting" />
            <h2>Digital Marketing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        <Link to="/app-development" className="service-card-link">
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPX-BQmMS_Fw6lSrVqReXT1t5QdV00yYXTw&s" alt="" className="fa-chart" />
            <h2>App Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

        <Link to="/branding" className="service-card-link">
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPX-BQmMS_Fw6lSrVqReXT1t5QdV00yYXTw&s" alt="" className="fa-bullhorn" />
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Service;
