var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};


var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("message","req","Please provide a message");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");



  
  

 
  

  
  
  







