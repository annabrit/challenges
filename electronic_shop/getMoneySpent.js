//https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(budget, keyboards, drives) {
  let sortedKeyboards = keyboards.sort((a, b) => a - b);
  let sortedDrives = drives.sort((a, b) => a - b);
  //quick check if prices are out of range
  if (sortedKeyboards[0] + sortedDrives[0] > budget) {
    return -1;
  }

  let mostPricyCombo = -Infinity;
  for (let keyboard of sortedKeyboards) {
    let driveMatch = closestUnder(sortedDrives, budget - keyboard);

    if (driveMatch > -1 && driveMatch + keyboard > mostPricyCombo) {
      mostPricyCombo = driveMatch + keyboard;
    }
  }
  return mostPricyCombo;
}

//aux space O(n + m)
//time O(nlogn + nlogm + mlogm)

//binary search to find the closest under or equal to a target number
function closestUnder(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] > target) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else if (
      array[mid] === target ||
      (array[mid] < target &&
        (array[mid + 1] > target || mid + 1 === array.length))
    ) {
      return array[mid];
    } else {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
  }
  return -1;
}

module.exports = getMoneySpent;
