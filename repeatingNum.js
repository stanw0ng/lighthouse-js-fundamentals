function repeatNumbers(data) {
  let resultArray = [];
  for (let i = 0; i < data.length; i++) {
    let currentTuple = data[i];
    let tupleResult = "";
    for (let j = 0; j < currentTuple[1]; j++) {
      tupleResult += currentTuple[0];
    }
    resultArray.push(tupleResult);
  }
  return resultArray.join(", ");
}