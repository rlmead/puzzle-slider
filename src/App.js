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
        {place: 0, display: 0},
        {place: 1, display: 1},
        {place: 2, display: 2},
        {place: 3, display: 3},
        {place: 4, display: 4},
        {place: 5, display: 5},
        {place: 6, display: 6},
        {place: 7, display: 7},
        {place: 8, display: 8},
        {place: 9, display: 9},
        {place: 10, display: 10},
        {place: 11, display: 11},
        {place: 12, display: 12},
        {place: 13, display: 13},
        {place: 14, display: 14},
        {place: 15, display: 15}
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
    // replace top right corner (index 3) with all-black square
  }

  // function to shuffle puzzle
  shufflePuzzle() {
    console.log('shuffling puzzle');
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
      <div className="App">
        <h1>solve this puzzle!</h1>
        {/* image input: drag & drop or choose file */}
        {/* when an image has been selected: */}
          {/* render sliced-up image with cutout */}
          {/* render button: shuffle puzzle */}
        <Board 
          puzzleState={this.state.puzzle}
        />
      </div>
    );
  }
}

export default App;