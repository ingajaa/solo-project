import React from 'react';
import './App.css';
import Header from './Header/Header'
//import ImageUploadForm from './ImageUploadForm/ImageUploadForm'
//import MonthlyCalendar from './MonthlyCalendar/MonthlyCalendar'
//import YearlyCalendar from './YearlyCalendar/YearlyCalendar'
//import TheCalendar from './TheCalendar/TheCalendar'
//import UploadForm2 from './UploadForm2/UploadForm2'
//import { PDFViewer } from '@react-pdf/renderer';
//import PdfRender from './PdfRender'
import PDFPrint from './PDFPrint/PDFPrint';


function App() {


  return (
    <div className="App">
      <Header />
      <PDFPrint />
    </div>
  );
}

export default App;
