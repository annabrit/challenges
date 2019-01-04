//https://www.hackerrank.com/challenges/magic-square-forming/problem

function getDistanceFromMagicSquare(square) {
  let smallestDistance = Infinity;
  //circum refers to the numbers around the outside of the square, starting at the top left
  let defaultCircum = [8, 3, 4, 9, 2, 7, 6, 1];
  let squareCircum = [
    ...square[0],
    square[1][2],
    ...square[2].slice().reverse(),
    square[1][0]
  ];

  for (let i = 0; i < 8; i++) {
    let distance = defaultCircum.reduce((dist, val, idx) => {
      return dist + Math.abs(val - squareCircum[idx]);
    }, 0);
    if (distance < smallestDistance) {
      smallestDistance = distance;
    }
    if (i === 3) {
      //the second half of the checking looks at the reflections of the first possible squares
      defaultCircum = [...defaultCircum.slice(1), defaultCircum[0]].reverse();
    } else {
      //rotates the values along the edges to get a new possible square
      defaultCircum = [...defaultCircum.slice(2), ...defaultCircum.slice(0, 2)];
    }
  }
  return smallestDistance + Math.abs(square[1][1] - 5);
}

//middle must be 5
//numbers across from each other must add to 10
//because sum of row, column, or diagonal is 15, a row, column, or diagonal must be made up of two even numbers and an odd number or three odd numbers
//remaining numbers are half even and half odd, so the corners must be even

module.exports = getDistanceFromMagicSquare;
