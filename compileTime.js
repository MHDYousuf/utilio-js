// function to calculate time taken to execute the function

/*
* @params func() code
*/

function compileTime(func = () => {}) {
  if(!Object.prototype.toString.call(func) == '[object Function]'){
    return new TypeError('compileTime() : Argument is not a function');
  }
  console.time("Function");
  func();
  console.timeEnd("Function");
}

compileTime(result())

export default compileTime
