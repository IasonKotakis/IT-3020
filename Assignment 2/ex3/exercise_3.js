function exercise_3(){
    var outputObj = document.getElementById("output");

    var a = parseInt(prompt("Please enter a number: ", ""));
    var temp = a;

    var reverse = 0;
    while (a > 0)
    {
    var lastDigit = parseInt(a % 10);
    a = parseInt(a / 10);
    reverse = reverse * 10 + lastDigit
    }

    outputObj.innerHTML = "number: " + temp + "<br><br>equal to its reverse? ";
   
    var str;
    if(reverse == temp)
    {str = "yes";}
       else
       {str = "no";}
    outputObj.innerHTML = outputObj.innerHTML + str+ "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
    }