import React from "react";
import css from './TodoList.module.css';

export default class TodoList extends React.Component{
    render() {
        const { todos } = this.props;

        return (
            <div className={css.TodoList}>
                <h3>Todos</h3>
                <ul>{
                    todos.map(({ id, text, complete }) =>
                        <li key={id} className={css.TodoList__item}>
                            <input
                                type="checkbox" 
                                checked={complete}
                            />
                            <p className={css.TodoList__text}>{text}</p>
                            <button
                                className={css.TodoList__button}
                                onClick={() => this.props.deleteTodo(id)}
                            >Delete</button>
                        </li>
                    )
                }</ul>
            </div>
        );     
    };
}