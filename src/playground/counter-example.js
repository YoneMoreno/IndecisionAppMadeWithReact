class Counter extends React.Component {
    constructor() {
        super();
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne() {
        console.log('handleAddOne');
    }

    handleMinusOne() {
        console.log('handleMinusOne');
    }

    handleReset() {
        console.log('handleReset');
    }

    render() {
        return (
            <div>
                <h1>Counter: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 0;
//
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log('addOne', count);
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     console.log('minusOne');
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset');
// };
//
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo, document.getElementById('app'));
// };
//
// renderCounterApp();