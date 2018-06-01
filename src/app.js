const appObject = {
    title: 'INDECISION best app',
    subtitle: 'WIth react',
    itemOne: 'live-server',
    itemTwo: 'babel'
};

var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle}</p>
        <ol>
            <li>{appObject.itemOne}</li>
            <li>{appObject.itemTwo}</li>
        </ol>
    </div>
);

const user = {
    name: 'Andrew',
    age: 99,
    location: 'Neverlands'
};

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const app = document.getElementById('app');

ReactDOM.render(template, app);