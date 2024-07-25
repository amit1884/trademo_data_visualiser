import React, { useState } from "react";
import Card from "../../components/Card/Card";
import CustomDataTable from "../../components/DataTable/CustomDataTable";
import { products } from "../../constants";
import Filter from "../../components/Filter/Filter";

function ProductsTable() {
  const [tableData,setTableData]=useState(products)
  const columns = [
    {
      name: "Product ID",
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
  const onRowSelect = (value) => {
    console.log(value);
  };
  return (
    <Card>
      <div className="table-header">
        <div className="row mb-4">
          <div className="col-md-6 col-12">
            <p>Detail List of Products</p>
          </div>
          <div className="col-md-6 col-12">
            <div className="">
              <Filter columns={columns} data={products} setTableData={setTableData}/>
            </div>
          </div>
        </div>
      </div>
      <div className="product-table">
        <CustomDataTable
          columns={columns}
          data={tableData}
          selectableRows={true}
          onSelectedRowsChange={onRowSelect}
        />
      </div>
    </Card>
  );
}

export default ProductsTable;
