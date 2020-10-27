import React from 'react';
import DefaultPic from './victoria-street.jpg';

function Board(props) {
  let content = [];
  for (let i = 0; i < props.puzzleState.length; i++) {
    let item = props.puzzleState[i];
    content.push(
      <div
        className='col-3'
        key={i}
        onClick={() => props.moveTile(i)}
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
      </div>
    );
  };
  return (
    <div className='container text-center mb-4'>
      <div className='row'>
        <div className='col-8 offset-2'>
          <div className='row'>
            {
              content
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board;