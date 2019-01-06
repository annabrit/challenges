//https://www.hackerrank.com/challenges/almost-sorted/problem

function checkAlmostSorted(arr) {
  //try case 1: is sorted
  if (checkSorted(arr)) {
    return 'yes';
  }
  let leftIndex = findFirstUnordered(arr);
  let rightIndex = findLastUnordered(arr);

  //really only useful to redefine the right index to the last value for inputs where the run goes to the end
  rightIndex = rightIndex == -1 ? arr.length - 1 : rightIndex;

  //try case 2: is swapped
  if (checkSorted(swapTwo(arr, leftIndex, rightIndex))) {
    return `yes swap ${leftIndex} ${rightIndex}`;
  }

  //try case 3: has a reversed subarray
  if (checkSorted(reverseSubArray(arr, leftIndex, rightIndex))) {
    return `yes reverse ${leftIndex} ${rightIndex}`;
  }

  return 'no';
}

function checkSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}

function findFirstUnordered(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return -1;
}

function findLastUnordered(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      return i;
    }
  }
  return -1;
}

function swapTwo(arr, l, r) {
  let arrCopy = arr.slice();
  [arrCopy[r], arrCopy[l]] = [arrCopy[l], arrCopy[r]];
  return arrCopy;
}

function reverseSubArray(arr, l, r) {
  return [
    ...arr.slice(0, l),
    ...arr.slice(l, r + 1).reverse(),
    ...arr.slice(r + 1)
  ];
}
module.exports = checkAlmostSorted;
