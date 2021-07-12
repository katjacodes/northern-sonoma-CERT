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
} */

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
      });
       
/*------------ GALLERY PAGE ------------*/

/* credit: code for image gallery taken from http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/howto/howto_css_modal_images.asp.html and edited to fit project needs with the support of question asked in Stackoverflow: https://stackoverflow.com/questions/68310635/modal-image-issue-in-javascript/68311080#68311080 */
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName('galleryPic');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}