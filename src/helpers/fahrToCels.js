export default (temp) => {
  temp = parseFloat(temp);
  return `${((temp - 32) * 5/9).toFixed(1)}${String.fromCharCode(176)}C`
}