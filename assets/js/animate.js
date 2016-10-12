$(document).ready(function () {
  $(".pulseDiv").hover(
    function () {
      $(this).addClass("animated infinite pulse");
      console.log("Wax On");
    }, function () {
      $(this).removeClass("animated infinite pulse");
      console.log("Wax Off");
    }
  );
});

