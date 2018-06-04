import React from 'react';
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => ({selectedOption: option}));
    };


    handleAddOption = (option) => {

        if (!option) {
            return 'Error: the option is empty, please write it';
        } else if (this.state.options.includes(option)) {
            return 'Error: the writen option is already saved';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // console.log('saving data', this.state.options);
        }
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ({options}));
                // console.log('fetching data', localStorage.getItem('options'));
            }
        } catch (e) {
            //If JSON is invalid we put the default options: []
        }

    }


    render() {
        const subtitle = 'Put your life into the hands of a computer!!';
        return (
            <div>
                <Header
                    subtitle={subtitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}/>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOption
                    handleAddOption={this.handleAddOption}/>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};