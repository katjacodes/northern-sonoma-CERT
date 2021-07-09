/*------------ EVENTS PAGES ------------*/
/* credit: code for API integration taken from https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6 and edited slightly to fit project needs */
        
function SubForm (){
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
       

/*------------ GALLERY PAGE ------------*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClass('galleryimage');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
