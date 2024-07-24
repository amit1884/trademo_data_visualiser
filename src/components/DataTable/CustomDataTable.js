import React from "react";
import DataTable from "react-data-table-component";
import "./dataTable.scss";
function CustomDataTable({
  columns,
  data,
  selectableRows,
  onSelectedRowsChange,
}) {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      selectableRows={selectableRows}
      onSelectedRowsChange={onSelectedRowsChange}
    />
  );
}

export default CustomDataTable;
