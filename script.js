/*
    # Main javascript File
*/
//document.getElementById('greeter').innerHTML = "Bye!"

// Get the input field
// var input = document.getElementById("prompt");
//
// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });

function addGoals() {
  //get info person wrote in text box
  var goal = document.getElementById('prompt').value;

  //create an li item
  var li = document.createElement("li");
  li.innerHTML = item;

  //add to goals list
  document.getElementById("goals").appendChild(li)

  // //create a remove button
  // var removeButton = document.createElement("button")
  // removeButton.innerHTML = "Remove"
  //
  // //add button to the list
  // document.getElementById("goals").appendChild(removeButton);
  //
  // //clear the text input inputBox
  // document.getElementById("prompt").value = "";
}
