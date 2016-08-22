// $( "resPanel" ).hover(
//   function() {
//     $( this ).addClass( "hover animated pulse" );
//     console.log("wax on");
//   }, function() {
//     $( this ).removeClass( "hover animated pulse" );
//     console.log("wax off");
//   }
// );

$("navbar").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});

// $( "resPanel" ).hover(
//   function() {
//     $( this ).addClass( "resPanelTest" );
//   }, function() {
//     $( this ).removeClass( "resPanelTest" );
//   }
// );