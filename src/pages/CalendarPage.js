import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendar View</h1>
      <div className="calendar-container">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default CalendarPage;