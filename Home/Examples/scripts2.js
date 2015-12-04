$("body").css("background-color","blue");

$("h1").html ("Welcome to jQuery");

$(".bigredbutton").click(function() {
    console.log("you clicked it");
    $("h1").toggleClass("white");

});
//jquery always starts with dollar sign

function myFunction() {
    // do stuff
    console.log ("hello world");
}

function addNums(num1,num2) {
    var sum = num1 + num2;
    return sum; 
}

$(window).keypress(function(event) {
    console.log(event);
    if(event.keyCode== 14) {
        //user pressed "r"
    $("body").css("background-color", "red");
    
    }
    
}
