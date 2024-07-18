import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const ComponentThree = () => {
  const [compThreeData, setCompThreeData] = useState({
    score: 0,
    title: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_3/",
          {
            headers: {
              Accept: "application/json",
              Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
            },
          }
        );
        setCompThreeData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    series: [compThreeData.score],
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "90%",
          margin: 20,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
            strokeWidth: "40%"
          },
        },
        hollow: {
          size: "38%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -5,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  };

  return (
    <div className="card mt-2" style={{ width: "100%", height: "26rem", borderRadius: '20px' }}>
      <div className="card-body mb-3 text-center">
        <div id="chart">
          <Chart options={options} series={options.series} type="radialBar" height={320} />
        </div>
        <p className=" mb-2">Of 100% points</p>
        <hr />
        <h5 className="card-text font-bold mt-4">{compThreeData.title} !</h5>
        <p className="mt-3" style={{ fontSize: '16px', color: 'grey' }}>{compThreeData.message}</p>
        <button
          className="border border-gray-300  px-3 py-2 mt-3  text-black"
          style={{ borderRadius: "30px", fontSize: '14px', fontWeight: 'bold' }}
        >
          Improve your Score
        </button>
      </div>
    </div>
  );
};

export default ComponentThree;
