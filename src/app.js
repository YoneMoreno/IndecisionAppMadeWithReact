class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return this.state.options = [];
        });
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[random]);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Error: the option is empty, please write it';
        } else if (this.state.options.includes(option)) {
            return 'Error: the writen option is already saved';
        }

        this.setState((prevState) => {
                return this.state.options = prevState.options.concat(option)
            }
        );
    }


    render() {
        const subtitle = 'Put your life into the hands of a computer!!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}/>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions}
                    onClick={props.handlePick}>
                What should I choose?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            {
                props.options.map((option) => <Option option={option} key={option}/>)
            }
            <button onClick={props.handleDeleteOptions}>Remove all options</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }


    handleAddOption(e) {
        e.preventDefault();
        const valueTypedInOptionInput = e.target.elements.option.value.trim();


        const error = this.props.handleAddOption(valueTypedInOptionInput);

        this.setState(() => {
            return {error: error};
        });

        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button type="submit">Add a new option</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            <p>{props.option}</p>
        </div>
    );
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));