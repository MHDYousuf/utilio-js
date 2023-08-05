// check string is anagram

/*
 * @param {String}
 */

function isAnagram(source, target) {

  if(source.length <= 0 || target.length <=0) return new TypeError('Provide arguments(source,target) to Anagram Function.')

  if (source.length !== target.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < source.length; i++) {
    obj1[source[i]] = (obj1[source[i]] || 0) + 1;
    obj2[target[i]] = (obj2[target[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if(obj1[key] !== obj2[key]){
      return false
    }
  }
  return true
}

export default isAnagram