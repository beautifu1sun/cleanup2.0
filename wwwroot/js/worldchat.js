$(document).ready(function() {
    $(".open-chat").click(function() {
        $(".chat-window").removeClass("displayChat");
        $(".open-chat").addClass("displayChat");
        $(".messages").scrollTop($(".messages")[0].scrollHeight);
        // when a new connection is made, this will send a new message to hub with the connected user
        connection.start();
    });
    $("#message-close").click(function() {
        $(".open-chat").removeClass("displayChat");
        $(".chat-window").addClass("displayChat");
        connection.stop();
    });
    // when the send button is clicked, run this function to send the message to the hub conection
    $(".send-btn").click(function() {
        let enteredTxt = $("#message-textbox").val();
        connection.send("send", user + ": " + enteredTxt); // connection.send sends parameters to the open hub
        $("#message-textbox").val("");
    });
    // store active user to display with each message
    var user = $("#username").html();
    // establish the hub you made your connection to in StartUp.cs
    let connection = new signalR.HubConnection('/hubs/chat');
    // any time the connection receives a message it sends it back
    // the following code captures it and appends it to our div
    connection.on('SendMessage', data => {
        $(".messages").append("<div class='LiveMsg'><p>" + data + "</p></div>");
        $(".messages").scrollTop($(".messages")[0].scrollHeight);
    });
    $(".display-message").click(function() {
        $(".display-message").hide();
    });
});