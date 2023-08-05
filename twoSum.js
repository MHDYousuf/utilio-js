// two sum

function twoSum(array_numbers, target = null) {

  if(array_numbers.length <=0) return new TypeError('Provide Arguments ([],number) to twoSum')

  if(target == null) return new TypeError('2 Arguments are expected to twoSum()')

  var obj = {};

  for (let i = 0; i < array_numbers.length; i++) {
    var n = array_numbers[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    }else{
      obj[n] = i
    }
  }

  return []
}


export default twoSum;