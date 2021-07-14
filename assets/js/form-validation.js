/*------------ EVENTS PAGES ------------*/

/* credit: code for image gallery taken from https://www.sitepoint.com/basic-jquery-form-validation-tutorial/ and https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6 and edited to fit project needs */

// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        fullname: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        }
      },
      // Specify validation error messages
      messages: {
        fullname: "Please enter your name.",
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        $.ajax({
            url:'https://api.apispreadsheets.com/data/15450/',
            type:'post',
            data:$("form[name='registration']").serializeArray(),
            success: function(){
            alert("Form Data Submitted")
            },
            error: function(){
            alert("There was an error")
        }
    });
  });
