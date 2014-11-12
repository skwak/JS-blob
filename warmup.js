window.onload = init;

function init () {
  var div = document.getElementById("clickme");
  div.onclick = clickHandler;
}
function clickHandler() {
  this.setAttribute("class", "blue");
}

// gold?
// function init () {
//   var div = document.getElementById("clickme");
//   div.onclick = clickHandler;
// }
// function clickHandler(e) {
//   var div = e.target;
//   div.setAttribute("class", "blue");
// }

// silver?
// function changeBlue(id) {
//   var red=document.getElementById("clickme");
//   red.setAttribute("id", "blue");
// }

// bronze:
// function init() {
//   var red=document.getElementById("clickme");
//   red.onclick=changeBlue;
// }
//
// function changeBlue() {
//   red.setAttribute("id", "blue");
// }
