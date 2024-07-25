import React, { useState } from "react";
import Card from "../../components/Card/Card";
import CustomDataTable from "../../components/DataTable/CustomDataTable";
import { products, supplies } from "../../constants";
import Filter from "../../components/Filter/Filter";

function SupplyTable() {
  const [tableData, setTableData] = useState(supplies);
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
        <div className="row mb-4">
          <div className="col-md-6 col-12">
            <p>Detail List of Suppliers</p>
          </div>
          <div className="col-md-6 col-12">
            <div className="">
              <Filter
                columns={columns}
                data={supplies}
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

export default SupplyTable;
