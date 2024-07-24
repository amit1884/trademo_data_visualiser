export const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const hue = (i * 137.508) % 360; // use golden angle approximation
    colors.push(`hsl(${hue}, 70%, 50%)`);
  }
  return colors;
};
