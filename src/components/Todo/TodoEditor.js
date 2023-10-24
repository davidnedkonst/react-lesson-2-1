import React from "react";

export default class TodoEditor extends React.Component {
    state = { message: '', };

    onChange = event => {
        const { name, value } = event.target;
        console.log('Change on ' + name + ': ' + value);
        this.setState({ [name]: value, }
        );
    };

    onSubmit = event => {
        event.preventDefault();
        console.log('TodoEditor write: form submit');
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        console.log('reset form run');
        this.setState({ message: '', });
    };

    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    };
}