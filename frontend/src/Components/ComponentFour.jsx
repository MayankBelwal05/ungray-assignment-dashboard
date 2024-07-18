import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ComponentFour = () => {
  const [compFourData, setCompFourData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_4/',
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Basic dHJpYWw6YXNzaWdubWVudDEyMw=='
          }
        }
      );
      setCompFourData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white my-2 rounded-2xl py-3" style={{borderRadius:'20px'}}>
      <h1 className="text-xl ml-6 py-4 px-1 font-semibold text-slate-700">Customers by device</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={compFourData} >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date2"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="unique_count" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="cumulative_tweets" stroke="#82ca9d" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComponentFour;
