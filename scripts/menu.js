$( document ).ready(function() {


  $( ".topnav" ).hide();
  $( ".hamburgerContainer" ).click(function() {
      $( ".topnav" ).slideToggle( "fast", function() {});
    });

});
