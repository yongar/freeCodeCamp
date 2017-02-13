function confirmEnding(str, target) {
  
  var strLength = str.length;
  var targetLength = target.length;
  console.log("string Length :" + strLength +" target length "+ targetLength)
  console.log("substring string length - target length " +str.substring(strLength-targetLength) );

  if (str.substring(strLength-targetLength) === target){
  	return true;
  }else
  {
  	return false;
  }
  //return str.endsWith(target);

 // return str;
}

var result = confirmEnding("Bastian", "n");
console.log(result);

