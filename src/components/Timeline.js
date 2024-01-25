// src/components/Timeline.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://arthurfrost.qflo.co.za/php/getTimeline.php');
        setTimelineData(response.data);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Timeline Data</h2>
      {timelineData ? (
        <pre>{JSON.stringify(timelineData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Timeline;
