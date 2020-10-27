import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Board(props) {
  let grid = [];
  for (let r = 0; r < 4; r++) {
    let rowArray = [];
    for (let c = 0; c < 4; c++) {
      let item = props.puzzleState[r * 4 + c];
      rowArray.push(
        <Col
          key={r * 4 + c}
          onClick={() => props.moveTile(r * 4 + c)}
          style={{
            maxWidth: '150px',
            minWidth: '150px',
            maxHeight: '150px',
            minHeight: '150px',
            overflow: 'hidden',
            margin: '0',
            padding: '0',
          }}>
          {
            (!item.blankTile)
            && <img
              alt='one-sixteenth of puzzle'
              src={props.image}
              style={{
                // calculate the part of the image to show
                // according to where the item needs to be in the solution
                marginTop: `${Math.floor(item.solution / 4) * -150}px`,
                marginLeft: `${(item.solution % 4) * -150}px`,
              }}
            >
            </img>
          }
        </Col>
      );
    };
    grid.push(
      <Row
      key={'row'+r} >
        { rowArray }
      </Row >
    )
  };

  return (
    <Container className='text-center mb-4'>
      {
        grid
      }
    </Container>
  )
}

export default Board;