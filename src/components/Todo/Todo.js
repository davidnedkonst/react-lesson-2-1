import React from 'react';
import TodoForm from './TodoForm';
import css from './Todo.module.css';
import initialTodos from '../../constants/todos.json';

export default class Todo extends React.Component {
    state = {
        todos: initialTodos,
    };

    onDeleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };

    onSubmitForm = (data) => {
        console.log('Todo write: form submit');
        console.log(data);
    }

    render() {
        const { todos } = this.state;

        return (
            <div className={css.Todo}>
                <TodoForm onSubmit={this.onSubmitForm} />

                <div className={css.Todo__list}>
                    <h3>Todos</h3>
                    <ul>{
                        todos.map(({ id, text }) =>
                            <li key={id} className={css.Todo__item}>
                                <p className={css.Todo__text}>{text}</p>
                                <button
                                    className={css.Todo__button}
                                    onClick={() => this.onDeleteTodo(id)}
                                >Delete</button>
                            </li>
                        )
                    }</ul>
                </div>
            </div>
        );
    }
}