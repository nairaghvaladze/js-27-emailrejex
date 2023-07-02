document.body.style.textAlign="center";
document.body.style.background="Bisque";

document.body.style.marginTop="150px";
document.getElementById("emailInput").style.width="300px";
document.getElementById("emailInput").style.height="46px";

document.getElementById("emailInput").style.borderRadius="10px";
document.getElementById("emailInput").style.border="none";
document.getElementById("button1").style.width="80px";
document.getElementById("button1").style.height="46px";
document.getElementById("button1").style.borderRadius="10px";
document.getElementById("button1").style.border="none";



 
 var output = document.getElementById('output');
 

      function submitEmail() {
         let userEmail = document.getElementById('emailInput').value;
         let regex = new RegExp(/\S+@\S+\.\S+/);
         let isValid = regex.test(userEmail);
         if (isValid) {
            output.innerHTML = userEmail + " is a valid email address!";
            output.style.color="green";
            document.getElementById("button1").style.background="blue";
            document.getElementById("button1").style.color="white";
            document.getElementById("myform").reset();
         } else {
            output.innerHTML =  userEmail + " is not a valid email address!";
            output.style.color="red";
            document.getElementById("button1").style.background="#lightgrey";
            document.getElementById("myform").reset();

         }
      }