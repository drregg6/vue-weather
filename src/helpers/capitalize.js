export default (str) => {
  str = str.toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  return str.join(' ');
}