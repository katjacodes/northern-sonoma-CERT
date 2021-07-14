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