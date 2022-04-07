/*
Define an object ticTacToe.
Follow the test specs to create a board property, move method, and a clear method.
The board property is a grid of arrays that represents the board, where each cell is initially null.
The move method is a method that, given a character, a row number, and a column number, adds the character to the correct cell in the board.
The clear method should reset the board to all nulls.
*/

let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  
  move: function(char, x, y) {
    if(!this.board[x][y]) {
      this.board[x][y] = char;
    }
    console.log(this.board);
    return this.board;
  },
  clear: function() {
    this.board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
    console.log(this.board);
    return this.board;
  }
}

/*
First we create an array with 3 arrays, each containing
Spaces for 3 null cells. For the move method, we first check
that the cell coordinate was not previously selected and
if not, replace the value with char. The clear method
sets this.board to our original board. Then we console log
this.board and return this.board.
*/