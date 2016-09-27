$(document).ready(function () {
  $(".resPanel, .nav1, .name2").hover(
    function () {
      $(this).addClass("animated infinite pulse");
      console.log("Wax On");
    }, function () {
      $(this).removeClass("animated infinite pulse");
      console.log("Wax Off");
    }
  );
});

