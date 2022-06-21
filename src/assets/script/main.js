function openNav() {
    document.getElementById("myNav").style.width = "50%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 
   
  var load = document.getElementById("loader"); 
  function loader() {
    load.style.display = "none";
  }  

   
// var show =  document.getElementById("myNav");
//  var showx =show.style.width="0%";
  function myFunction(x) {
  x.classList.toggle("change"); 

 
    var y = document.getElementById("myNav");
    if (y.style.width === "50%") {
      y.style.width = "0%";
    } else {
      y.style.width = "50%";
    }
  }

