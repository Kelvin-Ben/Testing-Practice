function stringLength(string) {
  if (string.length >10){
    throw new Error('string is too long');
  } else if (string.length <1){
    throw new Error('string is too short');
  }
  return string.length;
}
module.exports = stringLength;