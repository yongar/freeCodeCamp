
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  
  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  
  return newArr.filter(check);
}
console.log()
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
