import React from "react";
import Card from "../../components/Card/Card";
import CustomDataTable from "../../components/DataTable/CustomDataTable";
import { products, shipments, supplies } from "../../constants";

function ShipmentTable() {
  const columns = [
    {
      name: "Shipment ID",
      selector: (row) => row["Shipment ID"],
    },
    {
      name: "Date",
      selector: (row) => row["Date"],
      sortable: true,
    },
    {
      name: "Origin",
      selector: (row) => row["Origin"],
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row["Destination"],
      sortable: true,
    },
    {
      name: "Product ID",
      selector: (row) => row["Product ID"],
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row["Quantity"],
      sortable: true,
    },
    {
      name: "Supplier ID",
      selector: (row) => row["Supplier ID"],
      sortable: true,
    },
    {
      name: "Transport Mode",
      selector: (row) => row["Transport Mode"],
      sortable: true,
    },
  ];
  const onRowSelect = (value) => {
    console.log(value);
  };
  return (
    <Card>
      <div className="table-header">
        <p>Detail List of Shipments</p>
      </div>
      <div className="product-table">
        <CustomDataTable
          columns={columns}
          data={shipments}
          selectableRows={true}
          onSelectedRowsChange={onRowSelect}
        />
      </div>
    </Card>
  );
}

export default ShipmentTable;
