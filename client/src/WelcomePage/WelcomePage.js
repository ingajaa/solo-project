import React from 'react';
import { Link } from "react-router-dom";
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <>
    <p className="first-page-container">
    <main>
      <h3 className="welcome-headline">What can you do with MyCal?</h3>
      MyCal is a Web App for creating custom photo calendars
      <ul className="activity-list">
        <li>Choose your personalized calendar background image</li>
        <li>Mark dates important to you.</li>
        <li>Print your design</li>
        <li>Simply save it</li>
      </ul>
    </main>
    <nav>
       <Link className="personalize-link"to="/about">Personalize with MyCal</Link>
    </nav>
    </p>
    </>
  )
}

export default WelcomePage
