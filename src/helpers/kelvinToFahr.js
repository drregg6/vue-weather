export default (temp) => {
  // eslint-disable-next-line
  console.log(temp);
  return `${((temp * 9/5) - 459.67).toFixed(1)}${String.fromCharCode(176)}F`;
};
