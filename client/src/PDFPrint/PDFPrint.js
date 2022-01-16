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
    <div>
      <MonthlyCalendar ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  )
}

export default PDFPrint