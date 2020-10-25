import React from 'react';
import './App.css';
import Square from './Square.js'

class App extends React.Component {
  // store state with constructor
  constructor(props) {
    super(props);
    this.state = {
      // keep track of puzzle state for image rendering order
      puzzle: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>solve this puzzle!</h1>
        <Square 
          puzzleState={this.state.puzzle}
        />
      </div>
    );
  }
}

export default App;
