/*
* lab11.js - Libraries & Intro to jQuery
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 11 October
* License: Public Domain
*/

//add button to output
$("#output").append("<button>Press Me");
//add class=button to button
$("button").addClass("button")
//change background color of button to green
$(".button").css("background-color","lightgreen")

//button alert functions
$(".button").click(function(){
alert("Thanks for the click")
});
