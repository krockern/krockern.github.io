$( document ).ready(function() {

  $( ".topnav" ).hide();

  $( ".hamburgerContainer" ).click(function() {
    $( ".topnav" ).slideToggle( "fast", function(){});
  });

  $(".hamburgerItem").click(function() {
    hamburgerIcon(document.getElementById('hamburgerContainer'));
    $( ".topnav" ).slideUp( "fast", function(){});
  });
});

function hamburgerIcon(x) {
    x.classList.toggle("hamburgerChange");
}
