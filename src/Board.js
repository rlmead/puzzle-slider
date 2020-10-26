import React from 'react';

function Board(props) {
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-sm-6 offset-sm-3'>
                    <div className='row'>
                        {
                            props.puzzleState.map((item, index) => {
                                return (
                                    <div
                                        className='col-3'
                                        key={index}>
                                        {item.display}
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