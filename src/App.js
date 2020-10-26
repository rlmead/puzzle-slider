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
        { blankTile: false, solution: 0, pixels: [0,0] },
        { blankTile: false, solution: 1, pixels: [0,0] },
        { blankTile: false, solution: 2, pixels: [0,0] },
        { blankTile: false, solution: 3, pixels: [0,0] },
        { blankTile: false, solution: 4, pixels: [0,0] },
        { blankTile: false, solution: 5, pixels: [0,0] },
        { blankTile: false, solution: 6, pixels: [0,0] },
        { blankTile: false, solution: 7, pixels: [0,0] },
        { blankTile: false, solution: 8, pixels: [0,0] },
        { blankTile: false, solution: 9, pixels: [0,0] },
        { blankTile: false, solution: 10, pixels: [0,0] },
        { blankTile: false, solution: 11, pixels: [0,0] },
        { blankTile: false, solution: 12, pixels: [0,0] },
        { blankTile: false, solution: 13, pixels: [0,0] },
        { blankTile: false, solution: 14, pixels: [0,0] },
        { blankTile: false, solution: 15, pixels: [0,0] },
      ],
      validMoves: [
        [1, 4],
        [0, 2, 5],
        [1, 3, 6],
        [2, 7],
        [0, 5, 8],
        [1, 4, 6, 9],
        [2, 5, 7, 10],
        [3, 6, 11],
        [4, 9, 12],
        [5, 8, 10, 13],
        [6, 9, 11, 14],
        [7, 10, 15],
        [8, 13],
        [9, 12, 14],
        [10, 13, 15],
        [11, 14]
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
  componentDidUpdate() {
    window.localStorage.setItem('puzzleState', JSON.stringify(this.state));
  }

  // add a new image
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
    console.log(`swapping tiles ${tile1} and ${tile2}`);
    let updatedPuzzle = this.state.puzzle;
    let tile1Data = updatedPuzzle[tile1];
    let tile2Data = updatedPuzzle[tile2];
    updatedPuzzle[tile1] = tile2Data;
    updatedPuzzle[tile2] = tile1Data;
    this.setState({ puzzle: updatedPuzzle })
  }

  // function to move one tile to the empty space (if it's adjacent)
  moveTile(clicked) {
    let blankTile = this.state.puzzle.map(item => item.blankTile).indexOf(true);
    if (this.state.validMoves[clicked].indexOf(blankTile) != -1) {
      this.swapTiles(blankTile, clicked);
      this.checkSolved();
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
    // run swapTiles on blankTile in randomly-chosen directions 10x
    for (let i = 0; i < 20; i++) {
      let validMoves = this.state.validMoves[blankTile];
      let nextMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      this.swapTiles(blankTile, nextMove);
      blankTile = nextMove;
    }
    this.setState({puzzle: updatedPuzzle})
  }

  // function to check if the puzzle has been solved
  // to be run anytime a tile moves
  checkSolved() {
    this.state.puzzle.every((item, index) => item.solution === index)
      && alert('you won!');
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