import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ComponentTwo = () => {
  const [comp2Data, setComp2Data] = useState([
    {
      name: "This Year",
      data: [6000, 2000, 40000, 21000, 9200, 8700],
    },
    {
      name: "Last Year",
      data: [5000, 10000, 20000, 32000, 12000, 13000],
    },
  ]);

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#000",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#000",
        },
      },
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 100,
    },
    series: comp2Data,
  };

  return (
    <div className="ps-2 text-center" id="chart" style={{backgroundColor:'white',fontWeight:'bold'}}>
       <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '20px' }}>Comparison</h1>
        <div className="d-flex align-items-center">
          <select className="form-select" style={{ width: '120px' ,borderRadius:'20px',fontSize: '12px',fontWeight:'bold'}}>
            <option value="6_months">6 months</option>
            <option value="12_months">12 months</option>
          </select>
        </div>
      </div>
      <Chart options={options} series={comp2Data} type="bar" height={400}  />
    </div>
  );
};

export default ComponentTwo;
