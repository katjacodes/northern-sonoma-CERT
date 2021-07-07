/*------------ EVENTS PAGES ------------*/
/* credit: code for API integration taken from https://lovespreadsheets.medium.com/save-web-html-form-data-to-google-sheets-47e48f7517e6 and edited slightly to fit project needs */
        
function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/410/',
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

/* credit: code for image gallery taken from https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp and edited to fit project needs */
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }