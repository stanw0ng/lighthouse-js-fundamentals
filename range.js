/* function range(start,end,step) {
  arr = [start];
  i = start;
  while (i < end) {
    i += step;
    arr.push(i);
  }
  return arr;
}

console.log(range(0,10,2)) */

function range(start,end,step) {
  let arr = [];
  let i = start;

  while (i <= end) {
    if (start < end && step > 0 && start !== undefined && end !== undefined && step !== undefined) {
      arr.push(i);
      i += step;
    } else {
      return arr;
    }
  }
  return arr;
}

  console.log(range(0,10,2))