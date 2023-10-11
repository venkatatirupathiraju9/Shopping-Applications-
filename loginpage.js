document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  let UserName = e.target[0].value;
  let PassWord = e.target[1].value;

  let GetData = JSON.parse(localStorage.getItem("store")) || [];

  let found = false; // Variable to track if a match is found

  for (let i = 0; i < GetData.length; i++) {
    if (UserName === GetData[i].username && PassWord === GetData[i].password) {
      found = true; // Set found to true if a match is found
      alert("Login Successful");
      window.location.assign("Project2 Fashion.html");
      // break; // Exit the loop once a match is found
    }
  }
  if (!found) {
    alert("Error"); // Show an error alert if no match is found after the loop
    e.target[1].style.border = "2px solid red";
  }
});
