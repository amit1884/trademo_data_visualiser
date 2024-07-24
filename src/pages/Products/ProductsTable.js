import React from "react";
import Card from "../../components/Card/Card";
import CustomDataTable from "../../components/DataTable/CustomDataTable";
import { products } from "../../constants";

function ProductsTable() {
  const columns = [
    {
      name: "Product Id",
      selector: (row) => row["Product ID"],
    },
    {
      name: "Product Name",
      selector: (row) => row["Product Name"],
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row["category"],
      sortable: true,
    },
    {
      name: "Unit Price",
      selector: (row) => row["Unit Price"],
      sortable: true,
    },
    {
      name: "Stock Quantity",
      selector: (row) => row["Stock Quantity"],
      sortable: true,
    },
  ];
  const onRowSelect=(value)=>{
    console.log(value)
  }
  return (
    <Card>
      <div className="table-header">
        <p>Detail List of Products</p>
      </div>
      <div className="product-table">
        <CustomDataTable
          columns={columns}
          data={products}
          selectableRows={true}
          onSelectedRowsChange={onRowSelect}
        />
      </div>
    </Card>
  );
}

export default ProductsTable;
