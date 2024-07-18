import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const username = "trial";
const password = "assignment123";

const url = "https://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/";

const ComponentOne = () => {
  const [compOneData, setCompOneData] = useState({
    purchases: null,
    revenue: null,
    refunds: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'accept': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
          }
        });
        console.log('Response:', response.data); 
        setCompOneData(response.data);
      } catch (error) {
        if (error.response) {
          console.error('Server responded with error:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      }
    };

    fetchData();
  }, []);

  const formatNumber = (number) => {
    if (number >= 1000) {
      const magnitude = Math.floor(Math.log10(number) / 3);
      if (magnitude >= 1) {
        const formatted = (number / Math.pow(1000, magnitude)).toFixed(1);
        const cleanNumber = formatted.replace(/\.0$/, "");
        return `${cleanNumber}${'k'.repeat(magnitude)}`;
      }
    }
    return String(number);
  };

  return (
    <div className="row mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginRight: '20px' }}>Dashboard</h1>
        <div className="d-flex align-items-center">
          <h3 style={{ marginRight: '10px',fontSize: '14px',fontWeight:'bold' }}>Compare to</h3>
          <select className="form-select" style={{ width: '120px' ,borderRadius:'20px',fontSize: '14px' ,fontWeight:'bold'}}>
            <option value="last_year">Last year</option>
            <option value="this_year">This year</option>
          </select>
        </div>
      </div>
      {/* Purchase */}
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'grey' }}>Purchase</h5>
            <p className="card-text"><b>${formatNumber(compOneData.purchases)}</b></p>
            <div className="bg-green-200 px-3 rounded-xl flex items-center justify-center gap-2 text-green-800 w-1/2 mx-auto">
              +32%{" "}
              <FaArrowTrendUp />
            </div>
          </div>
        </div>
      </div>

      {/* Revenue */}
      <div className="col-sm-4">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'grey' }}>Revenue</h5>
            <p className="card-text"><b>${formatNumber(compOneData.revenue)}</b></p>
            <div className="bg-green-200 px-3 rounded-xl flex items-center justify-center gap-2 text-green-800 w-1/2 mx-auto">
              +49%{" "}

              <FaArrowTrendUp />

            </div>
          </div>
        </div>
      </div>

      {/* Refunds */}
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title" style={{ color: 'grey' }}>Refunds</h5>
            <p className="card-text"><b>${formatNumber(compOneData.refunds)}</b></p>
            <div className="bg-red-200 px-3 rounded-xl flex items-center justify-center gap-2 text-red-800 w-1/2 mx-auto">
              -7%{" "}

              <FaArrowTrendDown />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
