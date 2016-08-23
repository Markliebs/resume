// $(document).ready(function() {     
//     $('#second, #third').hover(function(){     
//         $('#first').addClass('blue');    
//     },     
//     function(){    
//         $('#first').removeClass('blue');     
//     });
// });   




$(document).ready(function() {    
$( ".resPanel" ).hover(
  function() {
    $( this ).addClass( "animated pulse" );
    console.log("wax on");
  }, function() {
    $( this ).removeClass( "animated pulse" );
    console.log("wax off");
  }
);
});  


// $('#resPanel').hover(
//        function(){ $(this).addClass('animated pulse') },
//        function(){ $(this).removeClass('animated pulse') }
// )

// $("#resPanel").hover(
// function(){$(this).toggleClass("animated pulse" );}
// );



// $("navbar").hover(function(){
//     $(this).css("background-color", "yellow");
//     }, function(){
//     $(this).css("background-color", "pink");
// });

// $( "resPanel" ).hover(
//   function() {
//     $( this ).addClass( "resPanelTest" );
//   }, function() {
//     $( this ).removeClass( "resPanelTest" );
//   }
// );