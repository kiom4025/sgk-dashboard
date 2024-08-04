import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import SourceData from '../Data/OnTimeDelivery.json'

const Barchart = () => {
  const chartData = {
    labels: SourceData.map((data)=>data["On-Time Delivery Analysis"]),
    datasets: [
      {
        label: "Total Jobs",
        data: SourceData.map((data)=>data["Total Jobs"]),
        backgroundColor: "rgb(41, 47, 86, 0.7)"
        
      },
      {
        label: "On Time",
        data: SourceData.map((data)=>data["On Time"]),
        backgroundColor: "rgb(172, 250, 112, 0.7)"
      },
      {
        label: "1 day late",
        data: SourceData.map((data)=>data["1 day late"]),
        backgroundColor: "rgb(250, 211, 112, 0.7)"
      },
      {
        label: "2 days late",
        data: SourceData.map((data)=>data["2 days late"]),
        backgroundColor: "rgb(232, 150, 84, 0.7)"
      },
      {
        label: "3 days late",
        data: SourceData.map((data)=>data["3 days late"]),
        backgroundColor: "rgb(215, 88, 55, 0.7)"
      },
      {
        label: "4 + days late",
        data: SourceData.map((data)=>data["4 + days late"]),
        backgroundColor: "rgb(197, 27, 27, 0.7)"
      },
    ]
  };  

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      },
      scales: {
        x: {
          type: "category",
          grid: {
            display: true
          }
        },
        y: {
          grid: {
            display: true
          },
          ticks: {
            beginAtZero: true
          }
        }
      }
    }
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default Barchart;