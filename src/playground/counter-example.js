class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: ++prevState.count
            };
        });
    }


    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: --prevState.count
            };
        });
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('count', this.state.count);
    }

    componentDidMount() {
        try {
            const count = localStorage.getItem('count');
            if (count) {
                this.setState(() => ({count}));
            }
        } catch (e) {

        }
    }


    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter/>, document.getElementById('app'));

