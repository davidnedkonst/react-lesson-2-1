import React from "react";
import css from './TodoEditor.module.css';


export default class TodoEditor extends React.Component {
    state = { message: '', };

    onChange = event => {
        const { name, value } = event.target;
        console.log('Change on ' + name + ': ' + value);
        this.setState({ [name]: value, });
    };

    onSave = event => {
        event.preventDefault();
        console.log('TodoEditor write: text save');
        console.log(this.state);
        this.props.onSubmit(this.state.message);
        this.reset();
    }

    reset = () => {
        console.log('Reset run');
        this.setState({ message: '', });
    };

    render() {
        return (
            <div className={css.TodoEditor}>
                <form onSubmit={this.onSave}>
                    <textarea
                        type="text"
                        name="message"
                        className={css.TodoEditor__textarea}
                        value={this.state.message}
                        onChange={this.onChange}
                    />

                    <button
                        type="submit"
                        className={css.TodoEditor__button}
                    >Save</button>
                </form>
            </div>
        );
    };
}