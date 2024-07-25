import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./filter.scss";
function Filter({
  data,
  setTableData,
  columns,
  value,
  clearFilterHandler,
  defaultValue,
  handleChange,
}) {
  const options = columns.map((column) => {
    return {
      label: column.name,
      value: column.name,
    };
  });
  const [filterField, setFilterField] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (filterField) {
      const tempData = data.filter((el) => {
        const fieldValue = el[filterField.value];
        if (fieldValue === undefined || fieldValue === null) {
          return false;
        }
        return String(fieldValue)
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setTableData(tempData);
    }
  };
  const resetFilter = () => {
    setTableData(data);
    setQuery("");
    setFilterField(null);
  };
  return (
    <div className="filterContainer">
      <div className="select-field">
        <CustomSelect
          options={options}
          defaultValue={filterField}
          handleChange={(value) => setFilterField(value)}
          placeholder="Select Field"
          isClearable={true}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          class="form-control"
          id="column"
          aria-describedby="column"
          value={query}
          onChange={handleInputChange}
          placeholder="enter here"
          disabled={!filterField}
        />
      </div>
      <div className="input-field">
        <button onClick={() => resetFilter()} className="reset-btn">
          Reset Filter
        </button>
      </div>
    </div>
  );
}

export default Filter;
