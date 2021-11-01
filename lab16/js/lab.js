/*
* lab16.js - JavaScript Classes and Objects
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 27 October
* License: Public Domain
*/

function Vehicle(newmake, newmodel, newyear, newcolor){
  this.make = newmake;
  this.model = newmodel;
  this.year = newyear;
  this.color = newcolor;
  this.info = function() {
    return("I have a " + this.make + " " + this.model + " in the color " + this.color + " that was made in " + this.year);
  }
}

var car = new Vehicle("Mini", "Cooper", 2013, "baby blue");


$("#output").append("<p>" + car.info() + "</p>");
