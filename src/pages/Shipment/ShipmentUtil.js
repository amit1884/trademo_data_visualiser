import { shipments } from "../../constants";

export const transportModes = [
  ...new Set(shipments.map((shipment) => shipment["Transport Mode"])),
];

export const shipmentQuantitiesByTransportMode = () => {
  const quantities = {};
  transportModes.forEach((mode) => {
    quantities[mode] = shipments
      .filter((shipment) => shipment["Transport Mode"] === mode)
      .reduce((total, shipment) => total + shipment.Quantity, 0);
  });
  return quantities;
};

export const shipmentQuantitiesOverTime = () => {
  const quantities = {};
  shipments.forEach((shipment) => {
    if (!quantities[shipment.Date]) {
      quantities[shipment.Date] = 0;
    }
    quantities[shipment.Date] += shipment.Quantity;
  });
  return quantities;
};
