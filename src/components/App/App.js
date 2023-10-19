import Counter from "../Counter/Counter";
import Dropdown from "../Dropdown/Dropdown";

export default function App() {
    return (
        <div>
            <h2>1. Состояние компонента</h2>
            <Counter />

            <h2>2. Выпадающее меню</h2>
            <Dropdown />
        </div>
    )
};