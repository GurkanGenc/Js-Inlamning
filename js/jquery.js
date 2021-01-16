// Sliding Panel

$("body").on("click", "#display", function(){
    $('.panel').not($(this).next(".panel").slideToggle("slow")).slideUp("slow");
  });