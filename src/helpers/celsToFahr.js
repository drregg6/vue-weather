export default (temp) => {
  temp = parseFloat(temp);
  return `${(temp * 9/5 + 32).toFixed(1)}${String.fromCharCode(176)}F`
}