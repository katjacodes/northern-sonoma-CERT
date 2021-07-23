/*globals $:false */

/*------------ EVENTS PAGES ------------*/
/* credit: code for sign-up form taken from https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/, https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6, and https://www.codemahal.com/video/checkboxes-and-form-validation/ and edited to fit project needs */

const fullnameEl = document.querySelector('#fullname');
const emailEl = document.querySelector('#email');

const form = document.querySelector('#signup');


const checkFullname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const fullname = fullnameEl.value.trim();

    if (!isRequired(fullname)) {
        showError(fullnameEl, 'Nombre no puede estar vacio.');
    } else if (!isBetween(fullname.length, min, max)) {
        showError(fullnameEl, `Nombre tiene que teneer entre ${min} y ${max} letras.`);
    } else if (!isFullnameValid(fullname)) {
        showError(fullnameEl, 'Nombre puede contener solamente letras.');
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
        showError(emailEl, 'Correo electrónico no puede estar vacío.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Correo electrónico es válido.');
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
};

function isChecked(){
    var greeter = document.getElementById('greeter').checked;
    var docent = document.getElementById('docent').checked;
    var publicconcierge = document.getElementById('publicconcierge').checked;
    var exhibitorconcierge = document.getElementById('exhibitorconcierge').checked;
    var prconcierge = document.getElementById('prconcierge').checked;
    var bagstuffer = document.getElementById('bagstuffer').checked;
    var crowdcontrol = document.getElementById('crowdcontrol').checked;
    
    if(greeter==false && docent == false && publicconcierge==false && exhibitorconcierge==false  && prconcierge == false && bagstuffer == false && crowdcontrol == false){
    alert('Por favor seleccione por lo menos un papel de voluntario.');
    return false;
    }
    else{
    return true;
    }
    }


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isFullnameValid = checkFullname(),
        isEmailValid = checkEmail(),
        isRoleValid =  isChecked();

    let isFormValid = isFullnameValid &&
        isEmailValid &&
        isRoleValid;

    /// submit to the server if the form is valid
    if(isFormValid) {
        var vals = $("#signup").serialize();
        $.ajax({
            url: "https://api.apispreadsheets.com/data/15836/",  
            method: "POST",
            data: vals,
            success: function(){
                alert("Datos enviados.");
            },
            error: function(){
                alert("Hubo un error.");
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
            fn.apply(null, args);
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