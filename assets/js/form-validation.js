/*------------ EVENTS PAGES ------------*/
/* credit: code for image gallery taken from https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/ and https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6 and edited to fit project needs */

const fullnameEl = document.querySelector('#fullname');
const emailEl = document.querySelector('#email');

const form = document.querySelector('#signup');


const checkFullname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const fullname = fullnameEl.value.trim();

    if (!isRequired(fullname)) {
        showError(fullnameEl, 'Name cannot be blank.');
    } else if (!isBetween(fullname.length, min, max)) {
        showError(fullnameEl, `Name must be between ${min} and ${max} characters.`);
    } else if (!isFullnameValid(fullname)) {
        showError(fullnameEl, 'Name can contain only letters.')
    } else {
        showSuccess(fullnameEl);
        valid = true;
    }
    return valid;
};


const isFullnameValid = (fullname) => {
  const re = /^[A-Za-z\s]+$/;
  return re.test(fullname);
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
const isBetween = (length, min, max) => length < min || length > max ? false : true;


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
/*$("button").click(function(){*/
  if(isFormValid) {
      var vals = $("#signup").serialize();
      $.ajax({
          url: "https://api.apispreadsheets.com/data/15450/",  
          method: "POST",
          data: vals,
          success: function(){
              alert("Form data submitted");
          },
          error: function(){
              alert("There was an error");
          }
      });
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
    }
}));