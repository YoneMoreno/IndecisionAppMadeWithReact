import React from 'react';

export default (props) => {
    return (
        <div>
            <p>{props.optionText}
                <button onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>Delete
                </button>
            </p>

        </div>
    );
};