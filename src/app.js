class Header extends React.Component {
    render() {
        return <p>This is from the HEADER</p>;
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));