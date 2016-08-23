$(document).ready(function () {
  $(".resPanel, .nav1").hover(
    function () {
      $(this).addClass("animated infinite pulse");
      console.log("Wax On");
    }, function () {
      $(this).removeClass("animated infinite pulse");
      console.log("Wax Off");
    }
  );
});

