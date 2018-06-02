class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['One', 'Two', 'Thing four']
        };
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life into the hands of a computer!!';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handleClick() {
        alert('handleClick');
    }

    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions}
                        onClick={this.handleClick}>
                    What should I choose?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor() {
        super();
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
        // alert('handleRemoveAll');
    }

    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option option={option} key={option}/>)
                }
                <button onClick={this.handleRemoveAll}>Remove all options</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const valueTypedInOptionInput = e.target.elements.option.value.trim();
        if (valueTypedInOptionInput) {
            alert(valueTypedInOptionInput);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button type="submit">Add a new option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));