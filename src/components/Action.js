import React from 'react';

export default (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions}
                    onClick={props.handlePick}>
                What should I choose?
            </button>
        </div>
    );
};