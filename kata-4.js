const instructorWithLongestName = function (instructors) {
  let longestNameEntry = instructors[0];
  
  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > longestNameEntry.name.length) {
      longestNameEntry = instructors[i];
    }
  }
  
  return longestNameEntry;
};