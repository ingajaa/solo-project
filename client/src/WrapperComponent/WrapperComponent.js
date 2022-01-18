import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header'
import PDFPrint from '../PDFPrint/PDFPrint';
import './WrapperComponent.css'

const WrapperComponent = () => {
  return (
    <>
    <div>
      <Header />
      <PDFPrint />
    </div>
    <nav>
        <Link className="welcome-page-link" to="/">Welcome</Link>
      </nav>
    </>
  )
}

export default WrapperComponent
