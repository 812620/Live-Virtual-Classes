function myFunc() {

    var txt;
    var person = prompt("Please enter your name :", "enter name");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    }
     else {
      txt = "Hello " + person ;
    }
    document.getElementById("demo").innerHTML = txt;
  }