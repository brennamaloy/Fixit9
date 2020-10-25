var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i<=dessertList.length - 1; i++)
       drpDesserts.addItem(dessertList[i])
  /* add a loop here that adds all the desserts in the array 
     to the dropdown.
  */
}


drpDesserts.onclick=function(s){
    if (typeof(s) == "object"){ 
    return                    
   } else { 
    drpDesserts.value = s  
   lblResult.hidden = false
   lblResult.textContent = (`You picked ${s} -that is a great choice!`)
   }
}


dYPage.onclick=function(){
  ChangeForm(describeYou)
}
