/*
    # Main javascript File
*/
//document.getElementById('greeter').innerHTML = "Bye!"

//Get the input field
var input = document.getElementById("prompt");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

var n = 0;

function addGoals() {
  //get info person wrote in text box
  var goal = document.getElementById('prompt').value;
  console.log('User goal is ' + goal);

  //create an li item
  var li = document.createElement("li");
  li.innerHTML = goal;

  //add to goals list
  document.getElementById("goals").appendChild(li)

  n++;
  li.setAttribute('id', n);

  //create a remove button
  var removeButton = document.createElement("button")
  removeButton.innerHTML = "Remove"

  //add button to the list
  document.getElementById("goals").appendChild(removeButton);

  //clear the text input inputBox
  document.getElementById("prompt").value = "";

}

element.addEventListener('click', removeElement);

function removeElement() {

}
