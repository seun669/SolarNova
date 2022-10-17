// $("#submitButton").click(function() {
//     alert("The Form has been Submitted.");
//  });

function message(){
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var email = document.getElementById("email");
  var num = document.getElementById("num");
  var textfield = document.getElementsByTagName("textarea");
  // var country = document.getElementsByTagName("");
  // var question = document.getElementsByTagName("option");
  var success = document.getElementById("toast-msg");

  var failed = success.innerHTML = "Complete all fields";



  if (fname.value === "" || lname.value === "" || email.value === "" || num.value === "") {
      // failed.style.display = 'block';
      
  }
  else {
      setTimeout(() => {
          fname.value = "";
          lname.value = "";
          email.value = "";
          num.value = "";
          textfield.value = "";
      }, 2000);

      success.style.display = "block";
  }

  setTimeout(() => {
      failed.style.display = "none";
      success.style.display = "none";
  }, 4000);
}