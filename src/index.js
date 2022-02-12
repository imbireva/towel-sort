
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let result = [];

    if (matrix !== undefined) {
        matrix.forEach((element, index) => {
            if (index % 2 !== 0) {
                element.reverse()
            }
    
            element.forEach((num) => {
                result.push(num)
            })
        })
        return result;
    }

    else {
        return [];
    }
      
}
