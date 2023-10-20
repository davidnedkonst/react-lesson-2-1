import React from "react";
import "./Dropdown.css";

export default class Dropdown extends React.Component {
    state = {
        visibility: false,
    };

    Toggle = () => {
        console.log("Dropdown toggle");
        this.setState(prevState => (
            {
                visibility: !prevState.visibility,
            }
        ));
    }

    render() {
        const { visibility } = this.state;
        
        return (
            <div className="Dropdown">
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.Toggle}>
                    Показать/Скрыть
                </button>

                {visibility &&
                    <div className="Dropdown__menu">
                        Выпадающее меню
                    </div>
                }
            </div>
        );
    }
}