const loginform = document.getElementById("login-form");
const loginBtn = document.getElementById("login-form-submit");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var username = loginform.username.value;
  var password = loginform.password.value;

  if (username === "example@site.com" && password === "123456789") {
    alert("You have successfully logged in.");
    window.location =
      "/Task2/user.html?username=" + username + "&password=" + password;
  } else if (username == "") {
    alert("Please enter username.");
  } else if (password == "" || password !== "123456789") {
    alert("Enter the Password or password is incorrect");
  } else if (password.length < 9 || password.length > 9) {
    alert("Password length should be 9");
  }
});
