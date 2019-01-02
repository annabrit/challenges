//https://www.hackerrank.com/challenges/counting-valleys/problem

function countValleys(elevationString) {
  let currentElevation = 0;
  let prevElevation = undefined;
  let valleyCount = 0;

  for (let char of elevationString) {
    prevElevation = currentElevation;
    if (char === 'D') {
      currentElevation--;
    } else if (char === 'U') {
      currentElevation++;
    }
    if (currentElevation === 0 && prevElevation < currentElevation) {
      valleyCount++;
    }
  }
  return valleyCount;
}

module.exports = countValleys;
