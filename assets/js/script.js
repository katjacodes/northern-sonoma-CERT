/*------------ GALLERY PAGE ------------*/
/* credit: code for scroll-to-top button taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top and edited slightly to fit project needs */
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


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