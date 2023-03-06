const urlEncode = function(text) {
  newStr =""
  for ( let i = 0; i < text.length; i ++) {
    if (text[i] === " ") {
      newStr += "%20";
    } else {
      newStr += text[i];
    }
  }
  return newStr;
};

console.log(urlEncode("Lighthouse Labs"));