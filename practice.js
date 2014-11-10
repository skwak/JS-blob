// var arrayOfNums = [2, 7, 7, 3, 9, 0, 1, 6, 8, 3, 8, 4, 7, 9];
//
// array of numbers
// -initialize a variable to keep track of the biggest item so far
// -use a for loop to look at each item of the array
// -if the current item is bigger than the biggest one so far, then make the current item the biggest one (reassignment)
// -after we get to the end of the array, return the variable with the biggest item
//
// var biggest = getBiggest(arrayofNums);
// console.log("The biggest is: ", biggest);

var arrayOfNums = [2, 7, 7, 3, 9, 0, 1, 6, 8, 3, 8, 4, 7, 9];
var biggestNum = arrayOfNums[0];

for (var i = 0; i < arrayOfNums.length; i = i + 1) {
  if (arrayOfNums[i] > biggestNum) {
    var biggestNum = arrayOfNums[i];
  }
  else {
    var biggestNum;
  }
}

console.log("The biggest is: ", biggestNum);
