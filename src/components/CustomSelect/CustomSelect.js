import React from "react";
import Select from "react-select";
function CustomSelect({
  options = [],
  defaultValue,
  loading = false,
  isSearchable = false,
  isClearable = false,
  isDisabled = false,
  handleChange,
}) {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isLoading={loading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      name="color"
      options={options}
      onChange={handleChange}
    />
  );
}

export default CustomSelect;
