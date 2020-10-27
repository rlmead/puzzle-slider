import React from 'react';
import DefaultPic from './victoria-street.jpg';

function Board(props) {
  return (
    <div className='container text-center mb-4'>
      <div className='row'>
        <div className='col-8 offset-2'>
          <div className='row'>
            {
              props.puzzleState.map((item, index) => {
                return (
                  <div
                    className='col-3'
                    key={index}
                    onClick={() => props.moveTile(index)}
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
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board;