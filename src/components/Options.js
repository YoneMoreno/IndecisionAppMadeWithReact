import React from 'react';
import Option from "./Option";


const Options = (props) =>
    (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Here are your options ;=)</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove all options
                </button>
            </div>

            {props.options.length === 0 && <p className="widget__message">Please add some options to get started</p>}
            {
                props.options.map((option) =>
                    <Option
                        optionText={option}
                        key={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
        </div>
    );


export default Options;