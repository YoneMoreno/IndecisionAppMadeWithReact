import React from 'react';
import Option from "./Option";


const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add some options to get started</p>}
            {
                props.options.map((option) =>
                    <Option
                        optionText={option}
                        key={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
            <button onClick={props.handleDeleteOptions}>Remove all options</button>
        </div>
    );
};

export default Options;