$("#openbtn").click(function(){
openNav();
});

$("#closebtn").click(function(){
  closeNav();
  });

function openNav() {
  $(".hideShow").css("width", "250px");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $(".hideShow").css("width", "0");
}