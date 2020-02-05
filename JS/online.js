function getScore()
{
  var x=quiz.q1.value;
  var y=quiz.q2.value;
  
  
  if(x== "" || y=="" )
  {
      alert("Mark all the Answers");
      return false;
  }
  var z=0;

  if(x=="a")
  {
      z=z+2;
  }

  if(y=="e"){
      z=z+2;
  }
  alert("Your Score is=" +z);
}