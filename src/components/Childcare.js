import React, { useState } from 'react';

export default function Childcare(){


  const handleAddEvent = () => {
    if (newEvent.trim() !== '') {
      setEvents([...events, newEvent]);
      setNewEvent('');
    }
  };


  const [currentDate, setCurrentDate] = useState(new Date());//Displays the current date 
  const [events, setEvents] = useState([]);// Displays the event list
  const [newEvent, setNewEvent] = useState(''); // Adds a new event 
  const [date, setDate] = useState(new Date());// Displays the date 

 
  return (
    <div className="kids--page">
      <h1>Kids Events:</h1>
      <h3>Today's Date and Time: {currentDate.toString()}</h3>
    <div className='kids--upcoming'>
      <h1 className='text-center'>Upcoming Events</h1>
    
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
        placeholder="Enter event name"
        className="event-field"
      />
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};



