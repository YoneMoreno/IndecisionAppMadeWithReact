class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life into the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I choose?</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));