import React from 'react';
import css from './Todo.module.css';
import initialTodos from '../../constants/todos.json';

export default class Todo extends React.Component {
    state = {
        todos: initialTodos,
        inputValue: '',
    };

    onDeleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };

    onInputChange = event => {
        console.log(event.target);

        this.setState({
            inputValue: event.target.value
        })
    };

    render() {
        const { todos } = this.state;

        return (
            <div className={css.TodoList}>
                <form className={css.TodoList__item}>
                    <label htmlFor='nameTodo'>Name todo</label>
                    <input id='nameTodo' type='text' onChange={this.onInputChange} />
                    <button type='submit'>Add todo</button>
                </form>

                <ul>{
                    todos.map(
                        ({ id, text }) =>
                            <li key={id} className={css.TodoList__item}>
                                <p className={css.TodoList__text}>{text}</p>
                                <button
                                    className={css.TodoList__button}
                                    onClick={() => this.onDeleteTodo(id)}
                                >Delete</button>
                            </li>
                    )
                }</ul>
            </div>
        );
    }
}