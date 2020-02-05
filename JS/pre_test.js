function calc()
 {
        var eng=eval(form1.eng.value);
        var gk=eval(form1.gk.value);
        var math=eval(form1.math.value);

       var result=eng+gk+math;

       form1.result.value= result;

       var per=result/3;
       form1.per.value=per;
       

       if(eng>gk && eng>math)
       {
           form1.higmark.value=eng
       }

       else if(gk>eng && gk>math)
       {
           form1.higmark.value=gk
       }

       else if(math> eng && math>gk)
       {
        form1.higmark.value=math
       }

}

function query() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function replace() {
    location.replace("index.html");
  }