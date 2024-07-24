import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { products } from "../../constants";
import Card from "../Card/Card";
import "./doughnutChart.scss";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({data,title=''}) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text:title,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.raw} units`;
              },
            },
          },
        },
      };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
