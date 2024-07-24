import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { products } from "../../constants";
import "./pieChart.scss";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Filter products to include only Electronics category
const electronicsProducts = products.filter(
  (product) => product.Category === "Electronics"
);

const productNames = electronicsProducts.map(
  (product) => product["Product Name"]
);
const stockQuantities = electronicsProducts.map(
  (product) => product["Stock Quantity"]
);

// Generate unique colors for each product
const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const hue = (i * 137.508) % 360; // use golden angle approximation
    colors.push(`hsl(${hue}, 70%, 50%)`);
  }
  return colors;
};

const productColors = generateColors(electronicsProducts.length);

const data = {
  labels: productNames,
  datasets: [
    {
      data: stockQuantities,
      backgroundColor: productColors,
      hoverBackgroundColor: productColors,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Stock Quantity of Electronics Products",
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

const PieChart = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
