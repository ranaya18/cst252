/*
* lab9.js - Anon Functions and Callbacks
* Author: Raeann Anaya raanaya@csumb.edu>
* Created: 2 October
* License: Public Domain
*/

document.getElementById("outputEl");

var oneEl = document.createElement("button")

var twoEl = document.createElement("button")

oneEl.innerText = "Press Me!";

twoEl.innerText = "Click Me!";

oneEl.style.color = "green";

twoEl.style.backgroundColor = "orange";

document.getElementById("outputEl").appendChild(oneEl);

document.getElementById("outputEl").appendChild(twoEl);

document.getElementById("h1").style.color = "olive";
