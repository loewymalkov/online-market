// var combo = function(wheel, size) {
//   return wheel + '' + size;
// }

// var wheelChoice = function(wheel) {
//   return wheel
// }

// var sizeChoice = function(size) {
//   return size
// }

// var wheel;
// var size;

$(document).ready(function(){
  

  $("form#select").submit(function(event){
    event.preventDefault();
    var wheel = $("#wheels").val();
    
    
    $("#output").append(wheel);
  });

  $("input:radio").submit(function(event2){
    event2.preventDefault();
    var size = $("input:radio[name=size]").val(); 
    var sizeSelect = sizeChoice(size);
    
    $("output2").append(sizeSelect);
  });

});


