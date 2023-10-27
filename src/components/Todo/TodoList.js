import React from "react";
import css from './TodoList.module.css';
import { nanoid } from "nanoid";

export default class TodoList extends React.Component {
    state = { todos: [], };

    addTodo = (text) => {
        const newTodo = {
            id: nanoid(),
            text,
            complete: false,
        };

        this.setState(
            ({ todos }) => ({ todos: [newTodo, ...todos] })
        );

        console.log('TodoList run. Add todo.');
    };

    checkboxChange = event => {
        // const todos = this.props.todos;
        // const todosCheck = todos.find(({ id }) => id === 1);

        this.setState(
            
        );


        console.log(event.target.id);
        console.log('chekbox ' + event.target.checked);
    }

    render() {
        this.setState(this.props.todos);
        const { todos } = this.props;
        // console.log(this.state);

        return (
            <div className={css.TodoList}>
                <h3>Todos</h3>
                <ul>{
                    todos.map(({ id, text, complete }) =>
                        <li key={id} className={css.TodoList__item}>
                            <input
                                id={id}
                                type="checkbox"
                                checked={complete}
                                onChange={id => this.checkboxChange(id)}
                            />

                            <p className={css.TodoList__text}>{text}</p>

                            <button
                                className={css.TodoList__button}
                                onClick={this.deleteTodo}
                            >Delete</button>
                        </li>
                    )
                }</ul>
            </div>
        );
    };
}