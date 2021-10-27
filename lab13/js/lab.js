/*
* lab11\3.js - Conditonals
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 18 October
* License: Public Domain
*/

 function sortingHat(str) {
   len = str.length;
   mod = len % 4;
   if (mod == 0) {
     return "Gryffindor"
   }
   else if (mod == 1) {
     return "Ravenclaw"
   }
   else if (mod == 2) {
     return "Slytherin"
   }
   else if (mod == 3) [
     return "Hufflepuff"
   ]
 }

 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var house = sortingHat(name);
   newText = "<p>You were sorted into " + house + "</p>";
   document.getElementById("output").innerHTML = newText;
 })
