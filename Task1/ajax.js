// AJAX call using XHR

function makeAjaxCall(url, methodType, mode) {
  // Form fields for post methods
  //   const data = {
  //     email: document.getElementById("loginEmail").value,
  //     password: document.getElementById("loginPassword").value,
  //   };

  // XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  //   if get method is send
  if (methodType == "GET") {
    xhr.open(methodType, url, mode);
    //sends the request to the server
    xhr.send();
    // function to be executed when the readyState changes
    // When readyState is 4 and status is 200, the response is ready:
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Xhr done successfully");
        var resp = xhr.responseText;
        // console.log(resp);
        var respJson = JSON.parse(resp); //In json format
        console.log(respJson);
        //   document.getElementById("demo").innerHTML = this.responseText;
      } else {
        console.log("Xhr processing going on"); // If request takes time/ process is going on
      }
    };
  } else if (methodType == "POST") {
    //if get method is send
    console.log("Post method is send");
    xhr.open(methodType, url, mode);
    // request header
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Request finished. Do processing here.
        console.log(xhr.responseText);
      }
    };
    xhr.send(data); //send data
  } else {
    console.log("No request is send");
  }
}
// git hub url to get user details
var URL = "https://api.github.com/users/ashutoshpipriye";

makeAjaxCall(URL, "GET", true); // asynchronous mode

// makeAjaxCall(URL, "GET", false); // synchronous mode

// makeAjaxCall(URL, "POST", true); //POST method

// AJAX call using fetch

// const url = "http://example.com";
// fetch(url, {
//     method : "POST",
//     body: new FormData(document.getElementById("inputform")),
//     // -- or --
//     // body : JSON.stringify({
//         // user : document.getElementById('user').value,
//         // ...
//     // })
// }).then(
//     response => response.text() // .json(), etc.
//     // same as function(response) {return response.text();}
// ).then(
//     html => console.log(html)
// );
