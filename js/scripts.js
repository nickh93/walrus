/*$(document).ready(function() {
  $(".clickable").click(function() {
    // $("#walrus-showing").toggle();
    // $("#walrus-hidden").toggle();
    $(this).parent().parent().next().show();
  });

  $(".clickable-hide").click(function() {
    // $("#walrus-showing").toggle();
    // $("#walrus-hidden").toggle();
    $(this).parent().parent().hide();
  });
});*/

$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $("#walrus-showing").toggle();
     $("#walrus-hidden").toggle();
  });

  $(".clickable-panda").click(function() {
     $("#panda-showing").toggle();
     $("#panda-hidden").toggle();
  });
  $(".clickable-lion").click(function() {
     $("#lion-showing").toggle();
     $("#lion-hidden").toggle();
  });
});
