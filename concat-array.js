function concat(...arrays) {
  return [].concat(...arrays);
}

console.log(concat(["1"], ["2"], ["3"]))