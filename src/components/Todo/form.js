import React from "react";
import css from './Todo.module.css';

export default class Form extends React.Component {
    state = {
        name: '',
        text: '',
    };

    onChange = event => {
        const { id, value } = event.target;
        console.log('Change on ' + id + ': ' + value);
        this.setState({ [id]: value, }
        );
    };

    onSubmit = event => {
        event.preventDefault();
        console.log('Form write: form submit');
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState(
            {
                name: '',
                text: '',
            }
        );
    };

    render() {
        return (
            <div className={css.Todo__form}>
                <h3>Input form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={css.Todo__input}>
                        <label htmlFor='name'>
                            Name todo:
                        </label>

                        <input
                            id='name'
                            type='text'
                            onChange={this.onChange}
                        />
                    </div>

                    <div className={css.Todo__input}>
                        <label htmlFor='text'>
                            Text todo:
                        </label>

                        <input
                            id='text'
                            type='text'
                            onChange={this.onChange}
                        />
                    </div>

                    <div className={css.Todo__input}>
                        <label htmlFor='complete'>
                            Complete todo:
                        </label>

                        <select
                            id='complete'
                        >
                            <option value={true}>Complete</option>
                            <option value={false}>Not complete</option>
                        </select>
                    </div>
                    <button type='submit' className={css.Todo__button}>Add todo</button>
                </form>
            </div>
        );
    };
};