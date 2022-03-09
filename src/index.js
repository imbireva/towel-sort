
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

