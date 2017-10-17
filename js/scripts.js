
$(".clickable").click(function() {
  $("p#par-js").show();
  $(".clickable").hide();
  });

$("p#par-js").click(function () {
  $("p#par-js").toggle();
  $(".clickable").toggle();
  });
