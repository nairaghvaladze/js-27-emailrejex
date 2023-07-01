document.body.style.textAlign="center";
document.body.style.background="Bisque";

document.body.style.marginTop="150px";
document.getElementById("emailInput").style.width="300px";
document.getElementById("emailInput").style.height="46px";

document.getElementById("emailInput").style.borderRadius="10px";
document.getElementById("emailInput").style.border="none";
document.getElementById("btn1").style.backgroundColor="Burlywood";
document.getElementById("btn1").style.width="200px";
document.getElementById("btn1").style.height="36px";
document.getElementById("btn1").style.borderRadius="10px";
document.getElementById("btn1").style.border="none";
document.getElementById("btn1").style.fontWeight="bold";

 
 var output = document.getElementById('output');
 

      function submitEmail() {
         let userEmail = document.getElementById('emailInput').value;
         let regex = new RegExp(/\S+@\S+\.\S+/);
         let isValid = regex.test(userEmail);
         if (isValid) {
          document.getElementById("btn1").disabled=true;
          document.getElementById("btn1").style.backgroundColor="green";
          document.getElementById("btn1").innerHTML="valid";
          document.getElementById("btn1").style.color="white";

         } else {
          document.getElementById("btn1").disabled=false;
          
            
         }
      }