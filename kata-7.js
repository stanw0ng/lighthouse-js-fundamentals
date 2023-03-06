const checkAir = function (samples, threshold) {
	cleanCount = 0;
  dirtyCount = 0;
  total = 0;
  
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'clean') {
    	cleanCount ++;
      total = dirtyCount + cleanCount;
    } else {
    	dirtyCount ++;
      total = dirtyCount + cleanCount;
    }
  }
  
  if (dirtyCount / total < threshold) {
  	return 'clean'
  } else {
  	return 'polluted'
  }
};