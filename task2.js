function reverseString(string){
  let stringArr= string.split('').reverse();
  return stringArr.join('');
}

module.exports = reverseString;