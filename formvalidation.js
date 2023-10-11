// console.log(document.forms[0]);

// let a=[];

document.forms[0].addEventListener("submit", function (event) {
  // console.log(event);
  event.preventDefault();

  console.log(event.target[0].value);
  console.log(event.target[1].value);
  console.log(event.target[2].value);
  console.log(event.target[3].value);
  console.log(event.target[4].value);
  console.log(event.target[5].value);

  let userName = event.target[0].value;
  let passWord = event.target[1].value;
  let password2 = event.target[2].value;
  let Email = event.target[4].value;
  let phoneNumber = event.target[5].value;

  let valid = true;

  // let userName = event.target[0].value;
  // let Email=event.target[4].value;
  if (userName.length >= 10 && userName[0] == "v") {
    let spann = document.querySelector("span");
    spann.style.display = "none";
    event.target[0].style.border = "2px solid green";
    valid = true;
  } else {
    // alert("fill the correct text");
    let spann = document.querySelector("span");
    spann.style.display = "block";
    event.target[0].style.border = "2px solid red";
  }

  // password1....
  // let passWord = event.target[1].value;
  if (typeof passWord !== "number" || !isNaN(passWord)) {
    let spann2 = document.getElementById("spann1");
    spann2.style.display = "none";
    event.target[1].style.border = "2px solid green";
    valid = true;
  } else {
    // alert("Enter Correct Password")
    let spann2 = document.getElementById("spann1");
    spann2.style.display = "block";
    event.target[1].style.border = "2px solid red";
  }

  //password2....
  // let password2 = event.target[2].value;
  if (password2 == passWord) {
    let spann4 = document.getElementById("span3");
    spann4.style.display = "none";
    event.target[2].style.border = "2px solid green";
    valid = true;
  } else {
    let spann4 = document.getElementById("span3");
    spann4.style.display = "block";
    event.target[2].style.border = "2px solid red";
  }

  // let phoneNumber = event.target[5].value;

  if (
    (phoneNumber[0] == 9 ||
      phoneNumber[0] == 8 ||
      phoneNumber[0] == 7 ||
      phoneNumber[0] == 6) &&
    phoneNumber.length == 10
  ) {
    // Validation is successful
    let pnumber = document.getElementById("spann7");
    pnumber.style.display = "none";
    event.target[5].style.border = "2px solid green";
    valid = true;

    // Redirect to the login page
    // window.open("./loginpage.html" ,"_self"); // Replace with the actual login page URL
  } else {
    // Validation failed
    let pnumber = document.getElementById("spann7");
    pnumber.style.display = "block";
    event.target[5].style.border = "2px solid red";
  }

  if (
    userName.length >= 10 &&
    userName[0] == "v" &&
    (typeof passWord !== "number" || !isNaN(passWord)) &&
    password2 == passWord &&
    (phoneNumber[0] == "9" ||
      phoneNumber[0] == "8" ||
      phoneNumber[0] == "7" ||
      (phoneNumber[0] == "6" && phoneNumber.length == 10))
  ) {
    alert("Regisrtation Successfull!!");
    window.open("./loginpage.html", "_self");
  } else {
    alert("Enter valid information here !");
  }

  let arr = JSON.parse(localStorage.getItem("store")) || [];

  if (valid) {
    let obj = {
      username: userName,
      password: passWord,
      confirmpassword: password2,
      phoneNumber: phoneNumber,
    };
    arr.push(obj);
    localStorage.setItem("store", JSON.stringify(arr));
  } else {
    alert("Enter correct details");
  }
});
