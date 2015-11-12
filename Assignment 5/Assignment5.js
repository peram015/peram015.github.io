$("Assignment5.css")
$("papaya.gif")
$("cat.gif")
$("Assignment5.html")

$("#container").click(function() {
    if (clicked == false) {
    $("#container").html("#container").css("background-image", "path");
    clicked = true;
    } else {
    $("#container").html("#container").css("background-image", "cat.gif");
    clicked = false;
    
    }
});