import React from "react";
import css from './TodoFilter.module.css';
import { nanoid } from "nanoid";


export default class TodoFilter extends React.Component {
    state = { filter: '', };

    id = { idFilterText: nanoid(), };

    onChange = event => {
        const { name, value } = event.target;
        console.log(`Change on ${name}. value=${value}`);
        this.setState({ [name]: value, });
        console.log(`TodoFilter.onChange() run. state.filter=${this.state[name]}`);
        console.log(`TodoFilter.onChange() run. state.filter=${this.state.filter}`);
        this.props.onChange(this.state[name]);
    };

    render() {
        return (
            <div>
                <form className={css.TodoFilter}>
                    <label htmlFor={this.id.idFilterText}>
                        {'Filter text:'}
                    </label>
                    <input
                        id={this.id.idFilterText}
                        type="text"
                        name="filter"
                        className={css.TodoFilter__input}
                        value={this.state.filter}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    };
};