/*
* lab17.js - Object-Oriented Design
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 3 November
* License: Public Domain
*/

class Vehicle {
  constructor(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}
info( ){
    return "Make: " + this.make +
           ", Model: " + this.model +
           ", Year: " + this.year +
           ", Color: " + this.color;
  }
}

mycar = new Vehicle("Mini", "Cooper", "2013", "baby blue");
console.log(mycar.info());

$("#output").append("<p>" + mycar.info() + "</p>");
