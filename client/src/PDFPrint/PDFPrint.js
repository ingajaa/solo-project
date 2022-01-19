import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './PDFPrint.css'
import MonthlyCalendar from '../MonthlyCalendar/MonthlyCalendar'

const PDFPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="container-for-calendar-and-photo-upload">
      <MonthlyCalendar ref={componentRef} />
      <button className="send-to-print-button" onClick={handlePrint}>I'm happy with my design, send to print</button>
    </div>
  )
}

export default PDFPrint