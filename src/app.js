const app = {
    title: 'INDECISION best app',
    subtitle: 'Let you life being in computers hands',
    options: ['one', 2]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Enoy',
    age: 17,
    location: 'GC'
};

function getLocation(userLocation) {
    if (userLocation) {
        return <p>Location: {userLocation}</p>;
    }
}
    ReactDOM.render(template, document.getElementById('app'));

