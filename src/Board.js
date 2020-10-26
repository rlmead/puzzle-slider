import React from 'react';

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
                                        onClick={() => props.moveTile(index)}>
                                        {(item.solution != 0) && item.solution}
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