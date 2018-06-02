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

class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    <li>Option One</li>
                    <li>Option Two</li>
                    <li>Option 3</li>
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" name="option"/>
                    <button type="submit">Add a new option</button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));