import React from "react";
import Card from "../../components/Card/Card";
import CustomDataTable from "../../components/DataTable/CustomDataTable";
import { products, supplies } from "../../constants";

function SupplyTable() {
  const columns = [
    {
      name: "Supplier ID",
      selector: (row) => row["Supplier ID"],
    },
    {
      name: "Supplier Name",
      selector: (row) => row["Supplier Name"],
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row["Country"],
      sortable: true,
    },
    {
      name: "Contact Person",
      selector: (row) => row["Contact Person"],
      sortable: true,
    },
    {
      name: "Contact Email",
      selector: (row) => row["Contact Email"],
      sortable: true,
    },
  ];
  const onRowSelect = (value) => {
    console.log(value);
  };
  return (
    <Card>
      <div className="table-header">
        <p>Detail List of Suppliers</p>
      </div>
      <div className="product-table">
        <CustomDataTable
          columns={columns}
          data={supplies}
          selectableRows={true}
          onSelectedRowsChange={onRowSelect}
        />
      </div>
    </Card>
  );
}

export default SupplyTable;
