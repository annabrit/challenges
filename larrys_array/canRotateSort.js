//https://www.hackerrank.com/challenges/larrys-array/problem

//looks like 2 out of order indices can never be reordered
//only return yes or no- don't need to track the rotations needed
//each number is the index + 1 - easy to know where numbers belong
//
/* displacement 
ABC -> BCA 'rotation' is really swapping B and A and C and A
CAB is also swapping B and A and C and B

BAC, CBA, ACB - odd # swaps
ABC, BCA, CAB- even # swaps

case 1
[1,6,5,2,4,3] 
[1,2,5,6,4,3] +1
[1,2,3,6,4,5] +1
[1,2,3,4,6,5] +1
[1,2,3,4,5,6] +1
even num of swaps - 

case 2
[3,1,2]
[1,3,2] +1
[1,2,3] +1

case 3
[1,2,3,5,4]
[1,2,3,4,5] +1 

*/

function canRotateSort(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 1) {
      continue;
    }
    let pair = arr.indexOf(i + 1, i + 1); //search for index of value that should be there, from the next index
    if (pair === -1) {
      return false;
    }
    [arr[i], arr[pair]] = [arr[pair], arr[i]];
    swaps++;
  }
  return swaps % 2 === 0;
}

module.exports = canRotateSort;
