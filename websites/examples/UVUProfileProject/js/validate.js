function initValidation(visitForm){
     
     window.addEventListener("load", function() {
     
        var form = document.querySelector(visitForm);
        var submitButton = document.getElementById("submitButton");
        var successMessage = document.getElementById("submitSuccess");
       
        form.addEventListener("submit", function(event) {

            validateForm();
            
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                submitButton.disabled = true;
                successMessage.style.display = "none";
            }
            else if(form.checkValidity() === true) {
                event.preventDefault();
                submitButton.disabled = false;
                successMessage.style.display = "block";
            }
            form.classList.add("was-validated"); 
         });

        form.addEventListener("change", function(event) {

            validateForm();
            
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                submitButton.disabled = true;
            }
            else if(form.checkValidity() === true) {
                submitButton.disabled = false;
            }
            form.classList.add("was-validated"); 
        })
         
   }, false);
   
}
function validateForm()
{
 checkReq("#first-name", "First Name is required", "firstError");
 checkReq("#last-name", "Last Name is required", "lastError");
 checkReq("#address", "Address is required", "addressError");
 checkReq("#city", "City is required", "cityError");
 checkReq("#state", "State is required", "stateError");
 checkZip("The zip code is in an invalid format");
 checkPhone("#cell-phone", "Phone number is required in a valid format");
 checkEmail("#email-address", "Email address is required in a valid format");
 checkReq("#username", "Username is required", "usernameError");
 checkPassword("#password", "Password is required and/or invalid");
 checkRadio("page-rate", "You must select one");
 checkCheckbox("You must select at least one");
}
function checkRadio(fieldName, message)
{
   var radios = document.getElementsByName(fieldName);
   var errorOutput = document.getElementById("rateError");

   for (var i = 0; i < radios.length; i++) {
       if (radios[i].checked) {
           errorOutput.innerHTML = "";
           break;
       }
       else {
           errorOutput.innerHTML = message;
       }
   }
}
function checkCheckbox(message)
{
   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
   var checkboxCount = 0;
   var errorOutput = document.getElementById("findError");

   for (var i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
           checkboxCount++;
       }
   }
   if (checkboxCount >= 1) {
       errorOutput.innerHTML = "";
   }
   else {
       errorOutput.innerHTML = message;
   }
}

function checkPhone(fieldName, message) {

    var phoneNumber = document.querySelector(fieldName);
    var phoneRegEx = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g;
    var errorOutput = document.getElementById("phoneError");
  
    if(phoneRegEx.test(phoneNumber.value)) {
      phoneNumber.setCustomValidity('');
      errorOutput.innerHTML = "";
    }
    else {
      phoneNumber.setCustomValidity(message);
      errorOutput.innerHTML = message;
    }
  }
  function checkEmail(fieldName, message) {
    var emailAddress = document.querySelector(fieldName);
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errorOutput = document.getElementById("emailError");
  
    if(emailRegEx.test(emailAddress.value)) {
      emailAddress.setCustomValidity('');
      errorOutput.innerHTML = "";
    }
    else {
      emailAddress.setCustomValidity(message);
      errorOutput.innerHTML = message;
    }
  }

function checkPassword(fieldName, message) {
    var password = document.querySelector(fieldName);
    var pwdRegEx = /^((?=.*[A-Z])(?=.{8,})([A-Za-z0-9\_]+))$/;
    var errorOutput = document.getElementById("passwordError");

    if(pwdRegEx.test(password.value)) {
        password.setCustomValidity('');
        errorOutput.innerHTML = "";
    }
    else {
        password.setCustomValidity(message);
        errorOutput.innerHTML = message;
    }
}

function checkZip(message) {
    var errorOutput = document.getElementById("zipError");
    var zip = document.getElementById("zip-code");

    if (zip.value.length = 0 || zip.value.length == 5 || zip.value.length == 9) {
        zip.setCustomValidity('');
        errorOutput.innerHTML = "";
    }
    else {
        zip.setCustomValidity(message);
        errorOutput.innerHTML = message;
    }
}

function checkReq(fieldName, message, errorId)
{
    var formElement = document.querySelector(fieldName);
    var errorOutput = document.getElementById(errorId);

    if (formElement.value.length > 0) {
        formElement.setCustomValidity('');
        errorOutput.innerHTML = "";
    } else {
        formElement.setCustomValidity(message);
        errorOutput.innerHTML = message;
    }
    formValidated();
    var formElement = document.querySelector(fieldName);
    return formElement.value.length > 0?true:false;
}

function formValidated(){
 var form = window.document.querySelector(".needs-validation");
 form.classList.add("was-validated");
}