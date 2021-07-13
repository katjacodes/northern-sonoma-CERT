/*------------ EVENTS PAGES ------------*/
/* credit: code for API integration taken from https://stackoverflow.com/questions/41777627/verify-email-address-before-sending-it-via-html-form-with-ajax and https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6 and edited slightly to fit project needs */
        
/* function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/15211/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
        alert("Form Data Submitted :)")
        },
        error: function(){
        alert("There was an error :(")
        }
    });
} 

function SubForm() {
  var email = $('#email').val();
  if(email === "") {
   return false;
  }
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
 }
      $("#myForm").submit(function(){
         if(validateForm()) {
 
        var vals = $(this).serialize();
 
        $.ajax({
          url: 'https://api.apispreadsheets.com/data/15211/',  
          method: "POST",
          data: vals,
          success: function(){
          alert("Form Data Submitted")
          },
          error: function(){
          alert("There was an error")
          }
        });
        return true;
        }
        return false; 
      }); */

/* credit: code for API integration taken from hhttps://www.javascripttutorial.net/javascript-dom/javascript-form-validation/ and edited slightly to fit project needs */
const fullnameEl = document.querySelector('#fullname');
const emailEl = document.querySelector('#email');

const form = document.querySelector('#signup');


const checkFullname = () => {

    let valid = false;

    const fullname = fullnameEl.value.trim();

    if (!isRequired(fullname)) {
        showError(fullnameEl, 'Name cannot be blank.');
    } else {
        showSuccess(fullnameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


const isRequired = value => value === '' ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};


const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isFullnameValid = checkFullname(),
        isEmailValid = checkEmail();

    let isFormValid = isFullnameValid &&
        isEmailValid;

    /// submit to the server if the form is valid
    if (isFormValid) {
      
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'fullname':
            checkFullname();
            break;
        case 'email':
            checkEmail();
            break;
            break;
    }
}));

       
/*------------ GALLERY PAGE ------------*/

/* credit: code for image gallery taken from http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/howto/howto_css_modal_images.asp.html and edited to fit project needs with the support of question asked in Stackoverflow: https://stackoverflow.com/questions/68310635/modal-image-issue-in-javascript/68311080#68311080 */
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var imgs = document.getElementsByClassName('galleryPic');
var modalImg = document.getElementById("img01");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}