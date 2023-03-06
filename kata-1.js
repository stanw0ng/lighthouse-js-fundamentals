const sumLargestNumbers = function(data) {
  data.sort(function(a,b) {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });
  return data[data.length-1] + data[data.length-2]
};

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));