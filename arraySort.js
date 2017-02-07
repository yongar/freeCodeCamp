
var array = [1, 12, 21, 2];

// Only change code below this line.

console.log(array.sort());

array.sort(function (a,b){
  return b>a?b:a;
});

console.log(array);
