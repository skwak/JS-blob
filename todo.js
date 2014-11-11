// Create a to do object, with the following properties:
//
// a task(a string) - a description of the thing to do
// who(a string) - the name of a person to do it
// done(a boolean) - is the task done or not?
// isDone (a method) - get the value of done
// setDone(a method) - set the value of done
//
// create 2 or 3 of these to do objects
// if that gets done, create an array of to-do objects

var toDo = {
  task: String,
  who: String,
  done: Boolean,
  getDone: function() {
    if (this.done === true) {
      return true;
    }
    elsif (this.done === false); {
      return false;
    }
  },
  setDone: function(boolean) {
    this.done = boolean;
  }
};

var dishes = {
  task: toDo.task = "wash dishes",
  who: toDo.who = "stephanie"
};

toDo.task = "wash dishes";
toDo.who = "stephanie";
toDo.setDone = true;
var dishes = [toDo.task = "wash dishes", toDo.who = "stephanie", toDo.setDone = true];
var laundry = [toDo.task = "laundry", toDo.who = "stephanie", toDo.setDone = false];
var toDo = [dishes];

function ToDo() {
	this.task = String;
  this.who = String;
  this.done = Boolean;
  this.getDone = function() {
      if (this.done === true) {
        return true;
      }
      else if (this.done === false); {
        return false;
      }
  };
  this.setDone = function(boolean) {
      this.done = boolean;
	};
}

var task1 = new ToDo();
task1.task = "dishes";
task1.who = "zomawia";
task1.setDone(true);
