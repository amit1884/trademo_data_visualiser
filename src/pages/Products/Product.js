import React, { useState } from "react";
import DoughnutChart from "../../components/DoughnutChart/Doughnut";
import BarChart from "../../components/BarChart/BarChart";
import "./products.scss";
import Card from "../../components/Card/Card";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import {
  productColors,
  productNamesBasedOnCategory,
  productsBasedOnCategory,
  stockQuantityBasedOnCategory,
  uniqueCategories,
  unitPriceBasedOnCategory,
} from "./productUtility";
import ProductsTable from "./ProductsTable";
import LineChart from "../../components/LineChart/LineChart";
const categoryOption = uniqueCategories();

function Product() {
  const [selectedCategory, setSelectedCategory] = useState(categoryOption[0]);
  const products = productsBasedOnCategory(selectedCategory?.value);
  const productNames = productNamesBasedOnCategory(selectedCategory?.value);
  const unitPrices = unitPriceBasedOnCategory(selectedCategory?.value);
  const handleChange = (value) => {
    setSelectedCategory(value);
  };
  const data = {
    labels: productNames,
    datasets: products.map((product, index) => ({
      label: product["Product Name"],
      data: productNames.map((name) =>
        name === product["Product Name"]
          ? unitPrices[productNames.indexOf(name)]
          : 0
      ),
      backgroundColor: productColors[index],
    })),
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
        text: "Unit Prices of Products",
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
          text: "Products",
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
          text: "Unit Price",
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

  const donaughnutDataForStockQuantity = {
    labels: productNames,
    datasets: [
      {
        data: stockQuantityBasedOnCategory(selectedCategory?.value),
        backgroundColor: productColors,
        hoverBackgroundColor: productColors,
      },
    ],
  };
  const donaughnutDataForUnitPrice = {
    labels: productNames,
    datasets: [
      {
        data: unitPriceBasedOnCategory(selectedCategory?.value),
        backgroundColor: productColors,
        hoverBackgroundColor: productColors,
      },
    ],
  };
  const lineChartDataForUnitPrice = {
    labels: productNames,
    datasets: [
      {
        label: "Unit Price",
        data: unitPriceBasedOnCategory(selectedCategory?.value),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true, // This option allows the area under the line to be filled
      },
    ],
  };
  const lineChartDataForStockQuantity = {
    labels: productNames,
    datasets: [
      {
        label: "Stock Quantity",
        data: stockQuantityBasedOnCategory(selectedCategory?.value),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true, // This option allows the area under the line to be filled
      },
    ],
  };
  return (
    <div className="productContainer">
      <Card>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="select-dropdown ">
              <div className="dropdown-label">Select Category</div>
              <CustomSelect
                options={categoryOption}
                defaultValue={selectedCategory}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </Card>
      <Card customClass={"customCard"}>
        <BarChart data={data} options={options} />
      </Card>
      <div className="row">
        <div className="col-md-6 col-12">
          <Card customClass={"customCard"}>
            <DoughnutChart
              data={donaughnutDataForUnitPrice}
              title={`Unit Prices for ${selectedCategory?.label}`}
            />
          </Card>
        </div>
        <div className="col-md-6 col-12">
          <Card customClass={"customCard"}>
            <DoughnutChart
              data={donaughnutDataForStockQuantity}
              title={`Stock Quantity for ${selectedCategory?.label}`}
            />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <Card customClass={"customCard"}>
            <LineChart
              data={lineChartDataForUnitPrice}
              title={`Unit Prices for ${selectedCategory?.label}`}
            />
          </Card>
        </div>
        <div className="col-md-6 col-12">
          <Card customClass={"customCard"}>
            <LineChart
              data={lineChartDataForStockQuantity}
              title={`Stock Quantity for ${selectedCategory?.label}`}
            />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
}

export default Product;
