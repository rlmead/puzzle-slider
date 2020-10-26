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
        {display: 0, solution: 0},
        {display: 1, solution: 1},
        {display: 2, solution: 2},
        {display: 3, solution: 3},
        {display: 4, solution: 4},
        {display: 5, solution: 5},
        {display: 6, solution: 6},
        {display: 7, solution: 7},
        {display: 8, solution: 8},
        {display: 9, solution: 9},
        {display: 10, solution: 10},
        {display: 11, solution: 11},
        {display: 12, solution: 12},
        {display: 13, solution: 13},
        {display: 14, solution: 14},
        {display: 15, solution: 15},
      ],
      solved: false,
    };
    this.addImage=this.addImage.bind(this);
    this.shufflePuzzle=this.shufflePuzzle.bind(this);
    this.moveTile=this.moveTile.bind(this);
    this.checkSolved=this.checkSolved.bind(this);
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

  // function to shuffle puzzle
  shufflePuzzle() {
    // choose a random tile to be the blank tile
    let blankTile=Math.floor(Math.random() * 16);
    
  }

  // function to move a tile
  // to the adjacent empty square
  // when tile is clicked
  moveTile(tileIndex) {
    console.log('moving tile');
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