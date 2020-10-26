import React from 'react';
import './App.css';
import Board from './Board.js'

class App extends React.Component {
  // store state with constructor
  constructor(props) {
    super(props);
    this.state = {
      // keep track of image order
      // for rendering images and checking solution
      puzzle: [
        { blankTile: false, solution: 0, validMoves: [1, 4] },
        { blankTile: false, solution: 1, validMoves: [0, 2, 5] },
        { blankTile: false, solution: 2, validMoves: [1, 3, 6] },
        { blankTile: false, solution: 3, validMoves: [2, 7] },
        { blankTile: false, solution: 4, validMoves: [0, 5, 8] },
        { blankTile: false, solution: 5, validMoves: [1, 4, 6, 9] },
        { blankTile: false, solution: 6, validMoves: [2, 5, 7, 10] },
        { blankTile: false, solution: 7, validMoves: [3, 6, 11] },
        { blankTile: false, solution: 8, validMoves: [4, 9, 12] },
        { blankTile: false, solution: 9, validMoves: [5, 8, 10, 13] },
        { blankTile: false, solution: 10, validMoves: [6, 9, 11, 14] },
        { blankTile: false, solution: 11, validMoves: [7, 10, 15] },
        { blankTile: false, solution: 12, validMoves: [8, 13] },
        { blankTile: false, solution: 13, validMoves: [9, 12, 14] },
        { blankTile: false, solution: 14, validMoves: [10, 13, 15] },
        { blankTile: false, solution: 15, validMoves: [11, 14] },
      ],
      solved: false,
    };
    this.addImage = this.addImage.bind(this);
    this.swapTiles = this.swapTiles.bind(this);
    this.moveTile = this.moveTile.bind(this);
    this.shufflePuzzle = this.shufflePuzzle.bind(this);
    this.checkSolved = this.checkSolved.bind(this);
  }

  // componentDidMount: load state from localStorage
  componentDidMount() {
    let puzzleState = JSON.parse(window.localStorage.getItem('puzzleState'));
    if (puzzleState) {
      this.setState(puzzleState);
    }
  }

  // componentDidUpdate: update localStorage
  // and check if the puzzle has been solved
  componentDidUpdate() {
    window.localStorage.setItem('puzzleState', JSON.stringify(this.state));
  }

  // function to add a new image
  addImage() {
    console.log('adding new image');
    // check that image is big enough (600x600ish)
    // add to public folder?
    // crop image to square
    // slice image into 4x4 grid
    // redisplay top right corner (index 3) with all-black square
  }

  // function to swap two tiles
  swapTiles(tile1, tile2) {
    console.log(`swapping tile ${tile1} and ${tile2}`);
    let updatedPuzzle = this.state.puzzle;
    let solution1 = updatedPuzzle[tile1].solution;
    let solution2 = updatedPuzzle[tile2].solution;
    updatedPuzzle[tile1].solution = solution2;
    updatedPuzzle[tile2].solution = solution1;
    updatedPuzzle[tile1].blankTile = false;
    updatedPuzzle[tile2].blankTile = true;
    this.setState({ puzzle: updatedPuzzle })
  }

  // function to move one tile to the empty space (if it's adjacent)
  moveTile(clicked) {
    let blankTile = this.state.puzzle.map(item => item.blankTile).indexOf(true);
    console.log(blankTile);
    if (this.state.puzzle[clicked].validMoves.indexOf(blankTile) != -1) {
      this.swapTiles(blankTile, clicked)
    }
  }

  // function to shuffle puzzle
  shufflePuzzle() {
    // reset the board so that each tile is at the correct index
    let updatedPuzzle = this.state.puzzle;
    updatedPuzzle.map(item => item.blankTile = false);
    updatedPuzzle.map((item, index) => item.solution = index);
    // choose a random tile to be the blank tile
    let blankTile = Math.floor(Math.random() * 16);
    updatedPuzzle[blankTile].blankTile = true;
    this.setState({puzzle: updatedPuzzle})
    // run moveTile on blankTile in random directions 10x
    // for (let i = 0; i < 10; i++) {
    //   let validMoves = this.state.puzzle[blankTile].validMoves;
    //   let nextMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    //   this.swapTiles(blankTile, nextMove);
    //   blankTile = nextMove;
    // }
  }

  // function to check if the puzzle has been solved
  // to be run anytime a tile moves (componentDidUpdate?)
  checkSolved() {
    console.log('checking for solution');
  }

  render() {
    return (
      <div className="App text-center">
        <h1 className="mb-4">solve this puzzle!</h1>
        {/* image input: drag & drop or choose file */}
        {/* when an image has been selected: */}
        {/* render sliced-up image with cutout */}
        {/* render button: shuffle puzzle */}
        <Board
          puzzleState={this.state.puzzle}
          moveTile={this.moveTile}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.shufflePuzzle}
        >
          shuffle
        </button>
      </div>
    );
  }
}

export default App;