$(document).ready(function() {
    
  var turn = 1;

  $('td').on('click', function() {
    var self = $(this); //self is the clicked td

    player = determinePlayer(turn) // player is either X or O
    self.addClass(player) //add a class X or O to the td self
    self.text(player) // add the player X or O in the td
    positions = positionsPlayed(player)
    console.log(positions) //output the positions

    checkwin(positions);
    // console.log(turn);
    turn++;
    self.off('click');
  });

  function determinePlayer(turn){
    if (turn % 2 === 0) {
      return 'O' 
    } else{
      return 'X'
    }
  }

  // function checkwin() {
  //   if (match('5', '7', '3')) {
  //     console.log("You win!")
  //   };
  // };


  //returns an array of positions played by the player
  function positionsPlayed(player){
    return $('.' + player).map(function(idx, node){
      return parseInt($(node).attr('id'));
    }).get();
  }

  // function match(x, y, z) {
  //   return (($(x).text() === $(y).text()) && ($(y).text() === $(z).text()))
  // };

  function checkwin(positions) {
    winners = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [5, 7, 9]]
    //for each combo in winners
    if (positions.length >= 3) {
      for (i=0; i <= winners.length; i++) {
        var combo = winners[i];
        for (j=0; j <= positions; j++) {
          return combo.include(positions[j]);
          console.log("You Win!");
        }
      }
      // check if the positions >= 3 and includes all the #s from any of the winning combos
      //return true or false for win
    }
  };

});

// $('td').text.remove()

// for combo in winners, pass it in match and check if it wins after each click