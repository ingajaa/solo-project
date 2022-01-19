import React from 'react';
import { Link } from "react-router-dom";
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <>
    <p className="first-page-container">
    <main>
      <div>
      <h2 className="mycal-design-caption" >MyCal Design</h2>
      </div>
      <div>
      <p className="welcome-headline">What can you do with MyCal?</p>
      MyCal is here for you for your custom photo calendar needs:
      <ul className="activity-list">
        <li>Choose your personalized calendar background image</li>
        <li>Mark dates important to you.</li>
        <li>Print your design</li>
        <li>Simply save it</li>
      </ul>
      </div>
    </main>
    <nav>
       <Link className="personalize-link"to="/about">Personalize with MyCal</Link>
    </nav>
    </p>
    </>
  )
}

export default WelcomePage
