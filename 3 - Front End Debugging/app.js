$(document).ready(function() {
  // Get references to the inventory elements
  var $peepCount = $("#peep-count");

  var changeBy5 = function(operand) {
    if (operand === '+') {
      $peepCount = $peepCount + 5;
    } else if (operand === '-') {
      $peepCount = $peepCount - 5;

      if ($peepCount >= 5) {
        for (let i = 0; i < 5; i++) {
          $('<img src="../assets/peeps.png" class="peep-img">').appendTo('#inventory');
        }
      } else {
        alert('Not enough Peeps!');
      }
    }
  };

  // Add event listeners to the buttons
  $(".consume-button").on("click", changeBy5('-'));
  $('.add-button').on('click', changeBy5('+'));
});
