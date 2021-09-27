/*
* lab7.js - Functions
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 27 September
* License: Public Domain
*/

//sortUserName - a function that takesuser input and sorts the letters
// of thier name
function sortUserName() {
  var userName = window.prompt("Hello. State your name so I can fix it.");
  console.log("userName =", nameArray);
//split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
// sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
// join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
// Abvoe lines could have been a single line:
// userName.toLower().split("").sort().
  return nameSorted;
}

// Output
document.writeln("Oh hello again, I fixed your name: ",
    sortUserName(), "</br>");
