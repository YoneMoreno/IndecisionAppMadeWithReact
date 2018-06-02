class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return this.state.visibility = !prevState.visibility;
        });
    };

    render() {
        return (
            <div>
                <h1>Visiblity toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' :
                    'Show details'}</button>
                {this.state.visibility && <p>DO you really want to show this crazy details?</p>}
            </div>
        );

    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// let visible = false;
// const toggleVisibility = (e) => {
//     e.preventDefault();
//     visible = !visible;
//     render();
//     console.log('click');
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visible ? 'Hide details' : 'Show details!'}
//             </button>
//             {visible && <p>Are you sure you want to see me?</p>}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// };
// render();