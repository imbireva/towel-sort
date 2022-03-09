
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (matrix !== undefined) {
    let matrixCopy = matrix.slice(); // create matrix copy because reverse() change original array

    matrixCopy.forEach((element, index) => {
      if (index % 2 !== 0) { // use reverse() if index of subarray is odd number
        element.reverse(); // reverse() change elements order in array [1, 2, 3] -> [3, 2, 1]
      }
      element.forEach((num) => { // work with subarray elements
        resultArr.push(num);
      })
    })

  }   
  return resultArr;  
}

// another solution

// function towelSort(matrix) {
//   let resultArr = [];
//   if (matrix !== undefined) {
//     let element;
//     for (let i = 0; i < matrix.length; i++) {        -> work with matrix
//       for (let j = 0; j < matrix[i].length; j++) {   -> work with subarray
//         if (i % 2 === 0) {                           -> even subarray index
//           element = matrix[i][j];                    -> order of numbers doesn't change
//         }
//         else {
//           element = matrix[i][matrix[i].length - j - 1];  -> start in the end of row (of subarray)
//         }
//         resultArr.push(element);                      -> push every number 
//       }
//     }
//   }
//   return resultArr;
// }

