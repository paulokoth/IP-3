// Declaring variables
  var ping = "Ping"
  var pong = "Pong"
  var pingpong = "Ping Pong"
  var userInputs = [];
  var gaming = function(number) {

    for (var i = 1; i <= number; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        userInputs.push(pingpong);
      } else if (i % 3 === 0) {
        userInputs.push(ping)
      } else if (i % 5 === 0) {
        userInputs.push(pong)
      } else {
        userInputs.push(i);
      }
    }
    return userInputs;
  }

// Game execution
$(document).ready(function() {
  $("form#pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#ping").val());
    var output =gaming(number)

    userInputs.forEach(function(number){

  $("ul.result").append("<li>" +number+"</li>")
    });
  });
});
