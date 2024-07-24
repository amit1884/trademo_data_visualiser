import { products } from "../../constants";
import { generateColors } from "../../utils";

export const productNames = products.map((product) => product["Product Name"]);
export const unitPrices = products.map((product) => product["Unit Price"]);
export const productColors = generateColors(products.length);
export const categories = products.map((product) => {
  return {
    label: product.category,
    value: product.category,
  };
});

export const productsBasedOnCategory = (category) => {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

export const productNamesBasedOnCategory = (category) => {
  let productsArr = productsBasedOnCategory(category).map(
    (product) => product["Product Name"]
  );
  return productsArr;
};
export const stockQuantityBasedOnCategory = (category) => {
  let productsArr = productsBasedOnCategory(category).map(
    (product) => product["Stock Quantity"]
  );
  return productsArr;
};

export const unitPriceBasedOnCategory = (category) => {
  let productsArr = productsBasedOnCategory(category).map(
    (product) => product["Unit Price"]
  );
  return productsArr;
};

export const uniqueCategories = () => {
  const uniqueSet = new Set();
  
  // Use Array.prototype.filter to remove duplicates
  const uniqueArray = categories.filter(item => {
    // Create a unique key based on the item properties
    const key = `${item.label}-${item.value}`;
    
    // Check if the key already exists in the Set
    if (uniqueSet.has(key)) {
      return false; // This item is a duplicate
    } else {
      uniqueSet.add(key); // Add the key to the Set
      return true; // Keep this item
    }
  });

  return uniqueArray;
};
