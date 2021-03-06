import React from 'react';
import './App.css';
import Board from './Board.js'
import DefaultPic from './victoria-street.jpg';

class App extends React.Component {
  // store state with constructor
  constructor(props) {
    super(props);
    this.state = {
      // keep track of image order
      // for rendering images and checking solution
      puzzle: [
        { blankTile: false, solution: 0 },
        { blankTile: false, solution: 1 },
        { blankTile: false, solution: 2 },
        { blankTile: false, solution: 3 },
        { blankTile: false, solution: 4 },
        { blankTile: false, solution: 5 },
        { blankTile: false, solution: 6 },
        { blankTile: false, solution: 7 },
        { blankTile: false, solution: 8 },
        { blankTile: false, solution: 9 },
        { blankTile: false, solution: 10 },
        { blankTile: false, solution: 11 },
        { blankTile: false, solution: 12 },
        { blankTile: false, solution: 13 },
        { blankTile: false, solution: 14 },
        { blankTile: false, solution: 15 },
      ],
    };
    this.addImage = this.addImage.bind(this);
    this.swapTiles = this.swapTiles.bind(this);
    this.moveTile = this.moveTile.bind(this);
    this.shufflePuzzle = this.shufflePuzzle.bind(this);
    this.checkSolved = this.checkSolved.bind(this);
    this.validMoves = this.validMoves.bind(this);
    this.fileUpload = null;
  }

  // add a new image
  addImage(event) {
    let files = event.target.files;
    if (files) {
      let objectUrl = URL.createObjectURL(files[0]);
      // check that image is big enough (600x600)
      var img = new Image();
      img.onload = function () {
        if (img.width < 600 || img.height < 600) {
          alert('please choose a picture that is at least 600px wide and 600px high');
          return;
        }
      }
      this.fileUpload = objectUrl;
      img.src = objectUrl;
    }
    // prepare the image for display
  }

  // function to identify valid moves given the current square
  validMoves(index) {
    let output = [];
    (index % 4 !== 0) && output.push(index-1);
    (index % 4 !== 3) && output.push(index+1);
    (index >= 4) && output.push(index-4);
    (index < 12 ) && output.push(index+4);
    return output;
  }

  // function to swap two tiles
  swapTiles(tile1, tile2) {
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
    if (this.validMoves(clicked).indexOf(blankTile) !== -1) {
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
    for (let i = 0; i < 30; i++) {
      let nextMove = this.validMoves(blankTile)[Math.floor(Math.random() * this.validMoves(blankTile).length)];
      this.swapTiles(blankTile, nextMove);
      blankTile = nextMove;
    }
    this.setState({ puzzle: updatedPuzzle })
  }

  // function to check if the puzzle has been solved
  // to be run anytime a tile moves
  checkSolved() {
    this.state.puzzle.every((item, index) => item.solution === index)
      && alert('you won!');
  }

  render() {
    return (
      <div className="App">
        <h1 className="m-4">Solve this puzzle!</h1>
        {/* render button to shuffle puzzle */}
        <button
          type="button"
          className="btn btn-primary ml-4 mb-4"
          onClick={this.shufflePuzzle}
        >
          shuffle
        </button>
        {/* image input: choose file */}
        {/* <input
          id='input'
          type='file'
          accept='image/png, image/jpeg'
          onChange={this.addImage}>
        </input> */}
        {/* render sliced-up image with cutout */}
        <Board
          puzzleState={this.state.puzzle}
          moveTile={this.moveTile}
          // use default image if user has not uploaded one
          image={this.fileUpload ? this.fileUpload : DefaultPic}
        />
      </div>
    );
  }
}

export default App;