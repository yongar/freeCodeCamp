
function convertToRoman(num) {
  numberString = num.toString();
  numArray = Array.of(numberString);
  console.log(numberString);
  
  console.log(numArray);
  for  (var numString in numArray) {
    console.log(numString);
    
    switch (numString){
      case 1:
        num += "I";
      case 2:
        num += "II";
      case 3:
        num += "III";
      case 4:
        num += "IV";
      case 5:
        num += "V";
      case 6:
        num += "VI";
      case 7:
        num += "VII";
      case 8:
        num += "VIII";
      case 9:
       num += "IX"
    }
  }
  return num;
}

var answer = convertToRoman(36);

console.log(answer);
