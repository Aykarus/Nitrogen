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
}
// //create a remove button
// var removeButton = document.createElement("button")
// removeButton.innerHTML = "Remove"
//
// //add button to the list
// document.getElementById("goals").appendChild(removeButton);
//
// //clear the text input inputBox
// document.getElementById("prompt").value = "";

function startTime() {
    //daily();
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    //var h = 8;
    //var s = today.getSeconds();
    m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 500);

    if (h < 11 && h > 5) {
        document.getElementById("message").innerHTML =
            "Good Morning ";
    } else if (h > 11 && h < 17) {
        document.getElementById("message").innerHTML =
            "Good Afternoon ";
    } else {
        document.getElementById("message").innerHTML =
            "Good Evening ";
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function daily() {
    const URL = "https://api.paperquotes.com/apiv1/qod/"
    console.log("connecting to: " + URL);

    var xhr = new XMLHttpRequest
    xhr.open('GET', URL);
    xhr.send(null);

    //let response = JSON.parse(xhr.responseText);


    xhr.onreadystatechange = function() {
        console.log("coming back!");
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {

                //  you succesfully got the data
                //  PARSE OUT THE DATA YOU WANT
                //console.log(xhr.responseText); // 'This is the returned text.'
                var response = JSON.parse(xhr.responseText);

                let quote = response["quote"]
                document.getElementById('inspirational-quote').innerHTML =
                    quote;

                // convert the string to a dictiora
                var x = JSON.parse(response);

                // output  whatever i got from the webiste
                console.log("-----------");
                console.log(x["message"]);
            }
        }
    }
}
