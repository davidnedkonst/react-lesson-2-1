import css from './TodoList.module.css';

export default function TodoList({ todos, onDeleteTodo }) {
    return (
        <div className={css.TodoList}>
            <ul>
                {
                    todos.map(
                        ({ id, text }) =>
                            <li key={id} className={css.TodoList__item}>
                                <p className={css.TodoList__text}>{text}</p>
                                <button
                                    className={css.TodoList__button}
                                    onClick={() => onDeleteTodo(id)}
                                >
                                    Delete
                                </button>
                            </li>
                    )
                }
            </ul>
        </div>
    );
}