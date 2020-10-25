hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){ 
    return 
  } else { 
  hmbMenu.value = s  
 switch(s) {
  case "Login":
    ChangeForm(Login)
    break;
  case "Describe You":
    ChangeForm(describeYou)
    break;
  case "Dessert Voting":
    ChangeForm(dessertVoting)
    break;
  case "Fav Exercises":
    ChangeForm(favExercises)
    break;
  default:
  return
}
}
}

