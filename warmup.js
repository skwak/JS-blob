// start jQuery

window.onload = init;

function init() {
  $("#clickme").click(function() {
    $("#clickme").addClass("blue").css("text-align", "center");
  });
  $("#clickthis").click(function() {
    $("#clickthis").css("background-color", "yellow").css("color", "gray").css("text-align", "center");
  });
  $(".rand").click(function() {
    $(".rand").css("background-color", "gray");
  });

}
  // $("#clickme").click(clickHandler);


// function clickHandler() {
//   $("#clickme").addClass("blue");
//   // this.setAttribute("class", "blue");
// }

// window.onload = init;

// javascript
// platinum
// function init () {
//   var div = document.getElementById("clickme");
//   div.onclick = clickHandler;
// }
// function clickHandler() {
//   this.setAttribute("class", "blue");
// }

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
