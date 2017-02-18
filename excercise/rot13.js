
function rot13(str) { // LBH QVQ VG!
	var result = "";


	for (var i = 0; i < str.length; i++){
		//console.log(str.charAt(i));
		if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
			//console.log(" --- " + str.charAt(i));
			var charcode = str.charCodeAt(i);
			charcode -= 13
			if (charcode < 65){
				//console.log("CharCODE :" + charcode);
				charcode = 26 + charcode;
				//console.log("CharCODE :" + charcode);
			}
			//console.log(String.fromCharCode(charcode));

			result += String.fromCharCode(charcode);

		}else {
			result += str.charAt(i);

		}

	}
  return result;
}

// Change the inputs below to test
var result = rot13("SERR PBQR PNZC");
console.log(result);
result = rot13("SERR CVMMN!");
console.log(result);
result = rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
console.log(result);
