var oldArray = [1, 2, 3, 4, 5, ];
// Only change code below this line.
var add3 = oldArray.map((val) => {
    var result = val + 3;
    console.log(result);
    return result;
});
var newArray = oldArray;
console.log(newArray);
