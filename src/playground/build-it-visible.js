let visible = false;
const toggleVisibility = (e) => {
    e.preventDefault();
    visible = !visible;
    render();
    console.log('click');
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>Toggle visibility</button>
            {visible && <p>Are you sure you want to see me?</p>}
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};
render();