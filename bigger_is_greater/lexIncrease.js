//https://www.hackerrank.com/challenges/bigger-is-greater/problem
//takes a string and returns the next string with all the same characters that is greater
function lexIncrease(str) {
  //loop through str from right to left
  //if a previous char is greater than current char, replace current char with the char just over in previous chars, remaining chars are sorted from least to greatest

  let strArr = str.split('');
  let indexSwapA = findLastDecrease(strArr);
  if (indexSwapA === -1) {
    return 'no answer';
  }
  let indexSwapB = strArr.lastIndexOf(
    findMinOver(strArr.slice(indexSwapA), strArr[indexSwapA])
  );
  //^ could also find this character by sorting since are sorting later anyways
  //swap character that is lower than a previous character with the character next in value;
  [strArr[indexSwapA], strArr[indexSwapB]] = [
    strArr[indexSwapB],
    strArr[indexSwapA]
  ];

  let sortedEnd = strArr.slice(indexSwapA + 1).sort();

  return [...strArr.slice(0, indexSwapA + 1), ...sortedEnd].join('');
}

function findMinOver(arr, limit) {
  let currentMin;
  arr.forEach((val, idx) => {
    if (val > limit && (currentMin === undefined || val < currentMin)) {
      currentMin = val;
    }
  });
  return currentMin;
}

function findLastDecrease(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      return i;
    }
  }
  return -1;
}

module.exports = lexIncrease;
