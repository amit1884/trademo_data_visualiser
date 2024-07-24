import React, { useState } from "react";
import DoughnutChart from "../../components/DoughnutChart/Doughnut";
import BarChart from "../../components/BarChart/BarChart";
import "./supplies.scss";
import Card from "../../components/Card/Card";
import { products, supplies } from "../../constants";
import { generateColors } from "../../utils";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { productColors } from "../Products/productUtility";
import ProductsTable from "../Products/ProductsTable";
import LineChart from "../../components/LineChart/LineChart";
import SupplyTable from "./SuppliesTable";
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
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Supplier Distribution by Country",
      },
    },
  };
  return (
    <div className="suppliesContainer">
      <div className="row">
        <div className="col-md-12 col-12">
          <Card customClass={"customCard"}>
            <LineChart data={data} title={`Stock Quantity for`} />
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
