document.body.style.textAlign="center";
document.body.style.background="Bisque";

document.body.style.marginTop="150px";
document.getElementById("emailInput").style.width="300px";
document.getElementById("emailInput").style.height="46px";

document.getElementById("emailInput").style.borderRadius="10px";
document.getElementById("emailInput").style.border="none";


 
 var output = document.getElementById('output');
 

      function submitEmail() {
         let userEmail = document.getElementById('emailInput').value;
         let regex = new RegExp(/\S+@\S+\.\S+/);
         let isValid = regex.test(userEmail);
         if (isValid) {
            output.innerHTML = userEmail + " is a valid email address!";
            output.style.color="green";
         } else {
            output.innerHTML =  userEmail + " is not a valid email address!";
            output.style.color="red";
         }
      }