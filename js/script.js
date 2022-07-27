
    $( ".change" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
            $( "body" ).removeClass( "dark" );
            $(".change").css("color","black");
            $("#name,h3").css("color", "black");
          
        } else {
            $( "body" ).addClass( "dark" );
          
            $("#name,h3").css("color", "white");
            $(".change").css("color","white");

            }
    });

    let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 25 ||
    document.documentElement.scrollTop > 25
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}