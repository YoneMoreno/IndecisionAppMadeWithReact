var template = (
    <div>
        <h1>Enoy Moreno Jimenez</h1>
        <p>This is some text</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const templateTwo = (
    <div>
        <h1>Yone Moreno Jimenez</h1>
        <p>Age: 21</p>
        <p>Location: Las Palmas</p>
    </div>
);

const app = document.getElementById('app');

ReactDOM.render(templateTwo, app);