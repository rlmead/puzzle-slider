import React from 'react';
import DefaultPic from './victoria-street.jpg';

function Board(props) {
  return (
    <div className='container text-center mb-4'>
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <div className='row'>
            {
              props.puzzleState.map((item, index) => {
                return (
                  <div
                    className='col-3'
                    key={index}
                    onClick={() => props.moveTile(index)}
                    style={{
                      maxWidth: '50px',
                      minWidth: '50px',
                      maxHeight: '50px',
                      minHeight: '50px',
                      overflow: 'hidden',
                      margin: '0',
                      padding: '0',
                    }}>
                    {
                      (!item.blankTile)
                      && <img
                        src={DefaultPic}
                        style={{
                          margin: '-900px 0px 0px 0px'
                        }}>
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