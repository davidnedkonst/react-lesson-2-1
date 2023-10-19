import React from "react";
import "./Dropdown.css";

export default class Dropdown extends React.Component {
    state = {
        visibility: false,
    };

    show = () => {
        this.setState({
            visibility: true,
        });
    }

    hidden = () => {
        this.setState({
            visibility: false,
        });
    }

    render() {
        return (
            <div className="Dropdown">
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.show}>
                    Показать
                </button>

                <button type="button" className="Dropdown__toggle">
                    Скрить
                </button>

                <div className="Dropdown__menu">
                    <ul>
                        <li><p>1</p></li>
                        <li><p>2</p></li>
                        <li><p>3</p></li>
                        <li><p>4</p></li>
                        <li><p>5</p></li>
                    </ul>
                </div>
            </div>
        );
    }
}