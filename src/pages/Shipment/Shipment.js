import React, { useState } from "react";
import "./shipment.scss";
import ShipmentTable from "./ShipmentTable";
import {
  shipmentQuantitiesByTransportMode,
  shipmentQuantitiesOverTime,
  transportModes,
} from "./ShipmentUtil";
import { generateColors } from "../../utils";
import BarChart from "../../components/BarChart/BarChart";
import Card from "../../components/Card/Card";
import LineChart from "../../components/LineChart/LineChart";
const quantitiesByTransportMode = shipmentQuantitiesByTransportMode();
const transportColors = generateColors(transportModes.length);

const barChartData = {
  labels: transportModes,
  datasets: [
    {
      label: "Shipment Quantities",
      data: transportModes.map((mode) => quantitiesByTransportMode[mode]),
      backgroundColor: transportColors,
    },
  ],
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Shipment Quantities by Transport Mode",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Transport Mode",
      },
    },
    y: {
      title: {
        display: true,
        text: "Quantity",
      },
    },
  },
};
const quantitiesOverTime = shipmentQuantitiesOverTime();
const dates = Object.keys(quantitiesOverTime).sort(
  (a, b) => new Date(a) - new Date(b)
);
const quantities = dates.map((date) => quantitiesOverTime[date]);
const lineChartData = {
  labels: dates,
  datasets: [
    {
      label: "Shipment Quantities",
      data: quantities,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: false,
      tension: 0.1,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Shipment Quantities Over Time",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
      },
    },
    y: {
      title: {
        display: true,
        text: "Quantity",
      },
    },
  },
};
function Shipment() {
  return (
    <div className="shipmentContainer">
      <div className="row">
        <div className="col-12">
          <Card customClass={"customCard"}>
            <BarChart data={barChartData} options={barChartOptions} />
          </Card>
        </div>
        <div className="col-12">
          <Card customClass={"customCard"}>
            <LineChart data={lineChartData} option={lineChartOptions} />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <ShipmentTable />
        </div>
      </div>
    </div>
  );
}

export default Shipment;
