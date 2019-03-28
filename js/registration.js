
window.onload = function () {
  var my_input = document.getElementById("psswd");
  var fistletter = document.getElementById("firstletter");
  var lowerletter = document.getElementById("lowerletter");
  var upperletter = document.getElementById("upperletter");
  var number = document.getElementById("number");
  var pswlength = document.getElementById("pswlength");

  // When the user clicks on the password field, show the message box
  my_input.onfocus = function () {
    document.getElementById("msg").style.display = "block";
  }

  // When the user clicks outside of the password field, hide the message box
  my_input.onblur = function () {
    document.getElementById("msg").style.display = "none";
  }


  my_input.onkeyup = function () {


    //validating fist character
    var letter = /^[a-zA-Z]/g;
    if (my_input.value.match(letter)) {

      firstletter.classList.remove("invalid");
      firstletter.classList.add("valid");

    } else {
      firstletter.classList.remove("valid");
      firstletter.classList.add("invalid");
    }



    //validating lowercase
    var lowerCase = /[a-z]/g;
    if (my_input.value.match(lowerCase)) {

      lowerletter.classList.remove("invalid");
      lowerletter.classList.add("valid");

    } else {
      lowerletter.classList.remove("valid");
      lowerletter.classList.add("invalid");
    }

    //validating uppercase letters
    var upperCase = /[A-Z]/g;
    if (my_input.value.match(upperCase)) {
      upperletter.classList.remove("invalid");
      upperletter.classList.add("valid");


    } else {
      upperletter.classList.remove("valid");
      upperletter.classList.add("invalid");
    }


    //validating number

    var numbers = /[0-9]/g;
    if (my_input.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");

    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");

    }

    //validating password length

    if (my_input.value.length >= 8) {

      pswlength.classList.remove("invalid");
      pswlength.classList.add("valid");
    } else {
      pswlength.classList.remove("valid");
      pswlength.classList.add("invalid");
    }
  }


  var useit = document.getElementById("repsswd");
  var yyy = document.getElementById("repass")

  useit.onkeyup = function () {

    if (useit.value != my_input.value) {

      useit.style.backgroundColor = "red";
      yyy.style.backgroundColor = "red";
      yyy.innerHTML = "Password do not match. Try Again";
    }

    else {
      useit.style.backgroundColor = "green";
      yyy.style.backgroundColor = "green";
      yyy.innerHTML = "Success! Password matches.";
    }
  }
}
