import React from "react";
import Counter from "../Counter";
import Dropdown from "../Dropdown";
import ColorPicker from "../ColorPicker";
import { colorPickerOptions } from "../../constants/colorPickerOptions";
import TodoList from "../TodoList";
import initialTodos from '../../constants/todos.json';

export default class App extends React.Component {
    state = {
        todos: initialTodos,
    };

    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };

    render() {
        return (
            <div>
                <h2>1. Состояние компонента</h2>

                <Counter />

                <h2>2. Выпадающее меню</h2>

                <Dropdown />

                <h2>3. Color picker</h2>

                <ColorPicker options={colorPickerOptions} />

                <h2>4. TodoList</h2>

                <TodoList todos={this.state.todos} onDeleteTodo={this.deleteTodo} />
            </div>
        );
    };
};