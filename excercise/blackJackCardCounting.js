
var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
       count++;
      break;
    case 10:
    case 'J':
    case 'j':
    case 'Q':
    case 'q':
    case 'K':
    case 'k':
    case 'a':
    case 'A':
       count--;
    default:
      break;
  }
      if (count > 0 ){
        console.log(count + " Bet")
        return count + " Bet";
        
      }else{
        console.log(count + " Hold")
        return count + " Hold";
      
      }
  
  
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A'); cc('A'); cc('A'); cc('A');
