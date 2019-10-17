export default (temp) => {
  temp = parseFloat(temp);
  return `${(temp - 273.15).toFixed(1)}${String.fromCharCode(176)}C`;
};
