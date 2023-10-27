import React from "react";
import css from './TodoFilter.module.css';
import { nanoid } from "nanoid";


export default class TodoFilter extends React.Component {
    state = { filter: '', filter1: '', };

    id = { idFilterText: nanoid(), };

    onChange = event => {
        // const { name, value } = event.target;
        // console.log(`Change on ${name}. value=${value}`);
        // this.setState({ [name]: value, });
        // console.log(`state.filter=${this.state[name]}`);
        // this.setState({ filter1: this.state.filter, });
        // console.log(this.state);
        // console.log(`state.filter1=${this.state.filter1}`);
        // this.props.onChange(this.state[name]);
    };

    render() {
        const { filter } = this.state;
        console.log(this.state.filter);

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
                        value={filter}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    };
};