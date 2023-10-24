import React from "react";
import css from './TodoForm.module.css';
import { nanoid } from "nanoid";

export default class TodoForm extends React.Component {
    state = { name: '', text: '', };

    id = { idInputName: nanoid(), idInputText: nanoid() };

    onChange = event => {
        const { name, value } = event.target;
        console.log('Change on ' + name + ': ' + value);
        this.setState({ [name]: value, }
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
        console.log('reset form run');
        this.setState({ name: '', text: '', });
    };

    render() {
        const { name, text } = this.state;
        const { idInputName, idInputText } = this.id;
        return (
            <div className={css.TodoForm}>
                <h3>Input form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className={css.TodoForm__input}>
                        <label htmlFor={idInputName}>
                            Name todo:
                        </label>

                        <input
                            id={idInputName}
                            name ='name'
                            type='text'
                            value={name}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className={css.TodoForm__input}>
                        <label htmlFor={idInputText}>
                            Text todo:
                        </label>

                        <input
                            id={idInputText}
                            name='text'
                            type='text'
                            value={text}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className={css.TodoForm__input}>
                        <label htmlFor='complete'>
                            Complete todo:
                        </label>

                        <select id='complete'>
                            <option value={true}>Complete</option>
                            <option value={false}>Not complete</option>
                        </select>
                    </div>
                    <button type='submit' className={css.TodoForm__button}>Add todo</button>
                </form>
            </div>
        );
    };
}; 