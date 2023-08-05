//total of an array

/*
* @param {Array} array The Array to iterate over
*/

function sumArray(array) {
  if(Array.isArray(array)){
    return array.length?(array.reduce((acc, currVal)=> acc +currVal)):0; //using reduce
  }
  return new TypeError('Param is not an array')
}

export default sumArray