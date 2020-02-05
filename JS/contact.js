function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else
      alert("THANK YOU");
  }

  function myFunction() {
        var x = document.getElementById("fname");
        x.value = x.value.toUpperCase();
      }
  