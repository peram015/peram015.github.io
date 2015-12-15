var shown = false;

$("#container").click(function() {
    if (shown == false) {
    $(".papaya").hide();
    $(".papaya").show();
    shown = true;
    } else {
    $(".papaya").hide();
    $(".vagina").show();
    shown = false;
    }
});
    