import css from './TodoList.module.css';

export default function TodoList({ todos }) {
    return (
        <div className={css.TodoList}>
            <ul>
                {
                    todos.map(
                        ({ id, text }) =>
                            <li key={id} className={css.TodoList__item}>
                                <p className={css.TodoList__text}>{text}</p>
                                <button type='button' className={css.TodoList__button}>Delete</button>
                            </li>
                    )
                }
            </ul>
        </div>
    );
}