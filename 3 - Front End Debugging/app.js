$(document).ready(function() {
  // Get references to the inventory elements
  var $peepCount = $("#peep-count");

  var changeBy5 = function(operand) {
    if (operand === '+') {
      $peepCount = $peepCount + 5;
    } else if (operand === '-') {
      if ($peepCount < 5) {
        alert('Not enough Peeps!');
      } else {
        $peepCount = $peepCount - 5;
      }
    }

    for (var i = 0; i < 5; i += 1) {
      $('<img src="./assets/peeps.png" class="peep-img">').appendTo('#inventory');
    }
  };

  // Add event listeners to the buttons
  $(".consume-button").on("click", changeBy5('-'));
  $('.add-button').on('click', changeBy5('+'));
});
