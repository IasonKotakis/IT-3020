//Math.floor(Math.random()) to create random colors
function createRC(){

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var rColor = "rgb(" + x + "," + y + "," + z + ")"; // generates random rgb colors
    return rColor;

  }
  
  //function that generates random position which within create random colors
  function RandomPos() {
  
   var container = document.getElementById("container");

    for(i = 1; i<=100; i++){

      var newdiv = document.createElement("div");
      container.appendChild(newdiv);
      var topProperty = Math.floor(Math.random() * 400); 
      var leftProperty = Math.floor(Math.random() * 400);
      var rColor = createRC();
      //setting the styles
      newdiv.style.top = topProperty + "px";
      newdiv.style.left = leftProperty + "px";
      newdiv.style.position = "Absolute";
      newdiv.style.backgroundColor = rColor;
      newdiv.style.width = 100 + "px";
      newdiv.style.height = 100 + "px";
      newdiv.setAttribute('onmouseover', "rmvChild(this)");
      //this allows to remove the child for the rmvChild() function

    }
  }
  
  //function that removed div upon hovering
  function rmvChild(divtoremove){
  var childCount = document.getElementById("container").childElementCount;

      if(childCount > 1){
      divtoremove.remove();
    }
    else{
      alert("Last one");
    }
  }