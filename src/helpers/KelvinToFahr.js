export default (temp) => {
  return `${((temp * 9/5) - 459.67).toFixed(2)}${String.fromCharCode(176)}F`;
};
