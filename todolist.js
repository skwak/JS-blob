// start jQuery
$(function() {
  var $addButton = $("#addButton");
  $addButton.click(function() {
    submit(event);
  });
});

function submit(event) {
  event.preventDefault();
  var $task = $("#task").val();
  if ($task.length === 0) {
    alert("You must write in a task!");
  }
  else {
    $("#list").append("<li class='not-done'>" + $task + "</li>").hide().fadeIn("slow");
    $("li").click(clickHandler);
  }
}

function clickHandler() {
  if ($(this).hasClass("not-done")) {
    $(this).toggleClass("done").removeClass("not-done");
  }

  if ($("li").length === $(".done").length) {
    var response = prompt("Do you want to remove all items in the list?");
    if ((response === "y") || (response === "yes") || (response === "Y") || (response === "YES")) {
      $("li").empty().fadeOut("fast");
    }
  }
}
  // $("li").toggleClass(function(){
  //   if ($(this).parent().is ("not-done")) {
  //     $(this).addClass("done");
  //   }
  //   else {
  //     $(this).removeClass("done");
  //     $(this).addClass("not-done");
  //   }
  // });

// semi-working JavaScript
// window.onload = init;
// listArray = [];
//
// function init() {
//   var buttonForm = document.getElementById("addButton");
//   buttonForm.onclick = function() {
//     submit(event);
//   };
// }
//
// function submit(event) {
//   event.preventDefault();
//   var newTask = document.getElementById("task");
//   var newListItem = document.createElement("li");
//   newListItem.setAttribute("class", "yellow not-done");
//   newListItem.setAttribute("onclick", "markDone()");
//   newListItem.innerHTML = newTask.value;
//   listArray.push(newTask.value);
//   // may not need this
//   newListItem.setAttribute("id", "task" + listArray.length);
//   list.appendChild(newListItem);
//   // item.onmousedown = markDone();
// }
//
//
//
//
// function markDone() {
//   var item = document.getElementsByClassName("yellow not-done")[0];
//   item.onclick = function(){
//     item.setAttribute("class", "blue done");
//   };
//
// }


// tasks triggered by image click
// function init() {
//   var catImage = document.getElementById("cat");
//   catImage.onclick = addStuff;
// }
//
// function addStuff() {
//   var catImage = document.getElementById("cat");
//   var answer = prompt("What do you want to add to the list?");
//   var newListItem = document.createElement("li");
//   newListItem.innerHTML = answer;
//
//   list.appendChild(newListItem);
//
// }


// tasks triggered by prompts
// function init() {
//   var list = document.getElementById("list");
//
//     for(var i=0; i < 3; i++) {
//
//     var prompted_item = prompt("What do you want to add to the list?");
//     var newListItem = document.createElement("li");
//     newListItem.innerHTML = prompted_item;
//
//     list.appendChild(newListItem);
//   }
// }
