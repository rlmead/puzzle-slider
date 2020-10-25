import React from 'react';

function Square(props) {
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-sm-6 offset-sm-3'>
                    <div className='row'>
                        {
                            props.puzzleState.map((item, index) => {
                                return (
                                    <div
                                        className='col-4'
                                        key={index}>
                                        {item}
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

export default Square;