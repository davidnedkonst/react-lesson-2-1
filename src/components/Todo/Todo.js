import React from 'react';
import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';
import css from './Todo.module.css';
import initialTodos from '../../constants/todos.json';

export default class Todo extends React.Component {
    state = {
        todos: initialTodos,
        filter: [],
    };

    deleteTodo = todoId => {
        console.log('Todo write: delete Todo');
        this.setState(
            ({ todos }) => ({
                todos: todos.filter(({ id }) => id !== todoId),
            })
        );
    };

    checkTodo = (check) => {

    }

    

    filterTodo = (data) => {

        console.log('Todo run. filter text = ' + data);
        // const todos = this.state.todos;

        // if (data.length === 0) {
        //     console.log("Filter text empty:");
        //     console.log(`'${data}'.length = ${data.length}.`);
        //     return;
        // }

        // else if (data) {
        //     console.log("filter text not empty:");
        //     console.log(`'${data}'.length = ${data.length}.`);

        //     const filterText = data.toLowerCase();
        //     const filterTodos = todos.filter(
        //         ({ text }) => text.toLowerCase().includes(filterText)
        //     );

        //     this.setState({ filter: filterTodos, });
        //     console.log(`Todo write. Filter todos with text '${filterText}'.`);
        // }
    };

    render() {
        const totalTodoCount = this.state.todos.length;
        const completeTodoCount = this.state.todos.reduce(
            (acc, todo) => (todo.complete ? acc + 1 : acc),
            0
        );

        return (
            <div className={css.Todo}>

                <div>
                    <p>Всего заметок: {totalTodoCount}</p>
                    <p>Выполнено заметок: {completeTodoCount}</p>
                </div>

                <TodoEditor
                    onSubmit={this.addTodo}
                />

                <TodoFilter
                    onChange={this.filterTodo}
                />

                <TodoList
                    todos={this.state.filter.length ? this.state.filter : this.state.todos}
                />
            </div>
        );
    };
};