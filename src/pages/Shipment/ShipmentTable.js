import React, { useState } from "react";
import Card from "../../components/Card/Card";
import CustomDataTable from "../../components/DataTable/CustomDataTable";
import { shipments } from "../../constants";
import Filter from "../../components/Filter/Filter";

function ShipmentTable() {
  const [tableData, setTableData] = useState(shipments);

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
        <div className="row mb-4">
          <div className="col-md-6 col-12">
            <p>Detail List of Shipments</p>
          </div>
          <div className="col-md-6 col-12">
            <div className="">
              <Filter
                columns={columns}
                data={shipments}
                setTableData={setTableData}
              />
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

export default ShipmentTable;
