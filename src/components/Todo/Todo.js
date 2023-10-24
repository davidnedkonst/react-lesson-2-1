import React from 'react';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import css from './Todo.module.css';
import initialTodos from '../../constants/todos.json';

export default class Todo extends React.Component {
    state = { todos: initialTodos, };

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
        return (
            <div className={css.Todo}>
                <TodoEditor/>

                <TodoList
                    todos={this.state.todos} 
                    deleteTodo ={this.onDeleteTodo}
                />
            </div>
        );
    }
}