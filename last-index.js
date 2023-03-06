function lastIndexOf(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1; //placed here because the loop completely runs and does not find a number and returns -1 (only returns if nothing is found!)
}

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);