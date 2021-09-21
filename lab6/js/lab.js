/*
* lab6.js - Arrays and Objects
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 20 September
* License: Public Domain
*/

//Define Variables
myTransport = ["Car"];

myMainRide = {
  make: "Mini",
  model: "Cooper",
  color: "Baby Blue",
  year: 2013,
  age: function() {
    return 2021 - age;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
