import React from "react";
import DoughnutChart from "../../components/DoughnutChart/Doughnut";
import BarChart from "../../components/BarChart/BarChart";
import "./supplies.scss";
import Card from "../../components/Card/Card";
import { supplies } from "../../constants";

import SupplyTable from "./SuppliesTable";
import { generateColors } from "../../utils";
import {
    countries,
  generateSupplierColors,
  supplierCountsByCountry,
} from "./suppliesUtils";
const supplierData = supplierCountsByCountry();
const supplierColors = generateSupplierColors(countries.length);
function Supplies() {
  const countryCounts = supplies.reduce((acc, supply) => {
    acc[supply.Country] = (acc[supply.Country] || 0) + 1;
    return acc;
  }, {});
  const data = {
    labels: Object.keys(countryCounts),
    datasets: [
      {
        label: "Supplier Distribution",
        data: Object.values(countryCounts),
        backgroundColor: generateColors(Object.keys(countryCounts)?.length),
      },
    ],
  };
  const barChartData = {
    labels: countries,
    datasets: [{
      label: "Number of Suppliers",
      data: countries.map(country => supplierData[country]),
      backgroundColor: supplierColors,
    }],
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
        text: "No. of Suppliers from different countries",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: $${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Countries",
        },
        grid: {
          display: false,
        },
        // Adjust the spacing and bar width
        stacked: true,
        barPercentage: 0.5, // Controls the width of the bars
        categoryPercentage: 0.8,
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
      },
    },
    elements: {
      bar: {
        barThickness: 30, // Set this value as needed
        maxBarThickness: 50, // Optional: Set a maximum thickness
      },
    },
  };
  return (
    <div className="suppliesContainer">
      <div className="row">
        <div className="col-md-12 col-12">
          <Card customClass={"customCard"}>
            <BarChart data={barChartData} options={options} />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-12">
          <Card customClass={"customCard"}>
            <DoughnutChart data={data} title={`Supplies`} />
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mt-4">
          <SupplyTable />
        </div>
      </div>
    </div>
  );
}

export default Supplies;
