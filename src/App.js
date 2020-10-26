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
      puzzle: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      solved: false,
    };
    this.addImage = this.addImage.bind(this);
    this.shufflePuzzle = this.shufflePuzzle.bind(this);
    this.swapTiles = this.swapTiles.bind(this);
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
    console.log(`swapping tiles ${tile1} & ${tile2}`);
  }

  // function to choose a random valid move
  chooseMove(tileIndex) {
    let validMoves = [-1, 1, -4, 4];
    let nextMove = tileIndex + validMoves[Math.floor(Math.random() * 4)];
    while (nextMove > 15 || nextMove < 0){
      nextMove = tileIndex + validMoves[Math.floor(Math.random() * 4)];
    }
    return nextMove;
  }

  // function to shuffle puzzle
  shufflePuzzle() {
    // choose a random tile to be the blank tile
    let blankTile = Math.floor(Math.random() * 16);
    // run moveTile on blankTile in random directions 10x
    for (let i = 0; i < 10; i++) {
      let nextMove = this.chooseMove(blankTile);
      this.swapTiles(blankTile,nextMove);
    }
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