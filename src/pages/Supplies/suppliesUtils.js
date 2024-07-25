import { supplies } from "../../constants";
import { generateColors } from "../../utils";

export const countries = [...new Set(supplies.map((supply) => supply.Country))];

export const supplierCountsByCountry = () => {
  const countryCounts = {};
  supplies.forEach((supply) => {
    countryCounts[supply.Country] = (countryCounts[supply.Country] || 0) + 1;
  });
  return countryCounts;
};

export const generateSupplierColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`);
  }
  return colors;
};