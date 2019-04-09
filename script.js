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
var list = document.getElementById('goals')
var lastid = 0;

function addGoals() {
  //get info person wrote in text box
  var goal = document.getElementById('prompt').value;
  console.log('User goal is ' + goal);

  //create an li item
  var li = document.createElement("li");
  li.innerHTML = goal;
  //add to goals list
  document.getElementById("goals").appendChild(li)
  li.setAttribute('id', 'item'+n);

  // n++;
  // li.setAttribute('id', n);
  // console.log(n.value);

  //remove button
  var removeButton = document.createElement('button');
  removeButton.appendChild(document.createTextNode("remove"));
  removeButton.setAttribute('onClick','removeElement("'+'item'+n+'")');
  li.appendChild(removeButton);
  n+=1;
  list.appendChild(li);
}

  function removeElement(id) {
    var item = document.getElementById(id);
        list.removeChild(item);
}
