/*
* lab11\2.js - Advanced jQUery
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 13 October
* License: Public Domain
*/

$("#btn-red").click(function() {
  $("#content").removeClass("green-text"),
  $("#content").toggleClass("red-text")
});

$("#btn-green").click(function(){
  $("#content").removeClass("redr-text"),
  $("#content").toggleClass("green-text")
});
