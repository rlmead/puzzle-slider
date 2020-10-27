import React from 'react';
import DefaultPic from './victoria-street.jpg';
import { Container, Row, Col } from 'reactstrap';

function Board(props) {
  let grid = [];
  for (let r = 0; r < 4; r++) {
    let rowArray = [];
    for (let c = 0; c < 4; c++) {
      let item = props.puzzleState[r*4+c];
      rowArray.push(
        <Col
          key={r*4+c}
          onClick={() => props.moveTile(r*4+c)}
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
              src={DefaultPic}
            // style={{
            //   margin: item.margin
            // }}
            >
            </img>
          }
        </Col>
      );
    };
    grid.push(
      <Row>{rowArray}</Row>
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