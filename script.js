document.body.style.textAlign="center";
document.body.style.background="Bisque";

document.body.style.marginTop="150px";
document.getElementById("emailInput").style.width="300px";
document.getElementById("emailInput").style.height="46px";

document.getElementById("emailInput").style.borderRadius="10px";
document.getElementById("emailInput").style.border="none";
document.getElementById("subbutton").style.width="80px";
document.getElementById("subbutton").style.height="46px";
document.getElementById("subbutton").style.borderRadius="10px";
document.getElementById("subbutton").style.border="none";


 var output = document.getElementById('output');


      function submitEmail() {
         var userEmail = document.getElementById('emailInput').value;
         var regex = new RegExp(/\S+@\S+\.\S+/);
         var isValid = regex.test(userEmail);
         if (isValid) {
            output.innerHTML = userEmail + " is a valid email address!";
            output.style.color="green";
            
            document.getElementById("subbutton").style.background="blue";
            document.getElementById("subbutton").style.color="white";   
            document.getElementById("subbutton").disabled=false;        
            
         } else {
            output.innerHTML =  userEmail + " is not a valid email address!";
            output.style.color="red";
            
            

         }
      }
