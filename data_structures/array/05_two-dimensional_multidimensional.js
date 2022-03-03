// create an array two dimensional
const averageTemp = []
averageTemp[0] = [75, 82, 73]
averageTemp[1] = [90, 84, 78]
console.log(averageTemp) // [[75, 82, 73], [90, 84, 78]]

// In javascript not is possible create an array two dimensional, because the javascript accept only
// array one-dimensional
//
// The previous code can be implemented as follow:
averageTemp[0] = []
averageTemp[0][0] = 75
averageTemp[0][1] = 82

averageTemp[1] = []
averageTemp[1][0] = 90
averageTemp[1][1] = 84

// averageTemp[line][column]

// For the print each element of matriz, can be use a link for
// i = line
// j = column

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
      console.log(matrix[i][j])
    }
  }
}

printMatrix(averageTemp) // 75, 82, 90, 84
