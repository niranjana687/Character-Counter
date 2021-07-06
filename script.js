function charCounterUpdate(str) {

    var spaces = str.split(' ').length - 1; //calculates the number of spaces.
 
    let result = str.length - spaces;
  
    document.getElementById("wordcount").innerHTML = result + " characters.";
  
  }
