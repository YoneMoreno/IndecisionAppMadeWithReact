const app = {
    title: 'INDECISION best app',
    subtitle: 'Let you life being in computers hands',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();

    console.log('form submitted', option);

};

const onClickRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onClickRemoveAll}>remove all options</button>
            <ol>
                {
                    app.options.map((option, index) => {
                        return <li key={option + index}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();