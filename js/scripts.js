$(document).ready(function(){
  $("#content").submit(function(event){
    var firstInput = $("input#first").val();
    var secondInput = $("input#second").val();
    var thirdInput = $("input#third").val();
    var fourthInput = $("input#fourth").val();
    var favoriteArray = [firstInput, secondInput, thirdInput, fourthInput];
    var newArray = [];
    newArray.push(favoriteArray);


    $(".first").text(favoriteArray[0]);
    $(".second").text(favoriteArray[1]);
    $(".third").text(favoriteArray[2]);
    $(".fourth").text(favoriteArray[3]);
    $(".array").text(newArray);

    $("#result").show();

    event.preventDefault();
  })

});
