import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clean up timer on component unmount
    };
  }, []);

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{dateTime.toLocaleString()}</p>
    </div>
  );
}

export default DateTimeDisplay;
