rbnPersonality.onclick=function(){
  let userChoice = $("input[name=rbnPersonality]:checked").prop("value")
  lblType.hidden = false
  lblType.textContent = (`I would agree that you are a '${userChoice}' person too!`)
}

fEPage.onclick=function(){
  ChangeForm(favExercises)
}