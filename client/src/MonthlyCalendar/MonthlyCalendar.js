import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './MonthlyCalendar.css'
import UploadForm from '../UploadForm/UploadForm'

const MonthlyCalendar = React.forwardRef((props, ref) => {

  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 21);
  const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 12);

return (
  <div ref={ref} className="monthly-calendar-component">
    <UploadForm />
    <CalendarComponent value={dateValue}
    min={startDate}
    isMultiSelection={true}
    start="Year"></CalendarComponent>
  </div>
)
})

export default MonthlyCalendar