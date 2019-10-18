export default (temp) => {
  // eslint-disable-next-line
  console.log(temp);
  return `${(temp - 273.15).toFixed(1)}${String.fromCharCode(176)}C`;
};
