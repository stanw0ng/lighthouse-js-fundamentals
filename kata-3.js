const numberOfVowels = function(data) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let letter of data.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("aeiou"));