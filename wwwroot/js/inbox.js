$(document).ready(function(){
    $(".open-msg").click(function(){
        $(".msg-window").removeClass("displayMsg");
        $(".open-msg").addClass("displayMsg");
    });
    $("#close-msg").click(function(){
        $(".open-msg").removeClass("displayChat");
        $(".msg-window").addClass("displayChat");
    });
});