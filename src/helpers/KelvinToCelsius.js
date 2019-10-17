export default (temp) => {
  return `${(temp - 273.15).toFixed(2)}${String.fromCharCode(176)}C`;
};
