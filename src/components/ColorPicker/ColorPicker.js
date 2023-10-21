import React from "react";
import "./ColorPicker.css";
import addNewClass from "../../utils/addNewClass";

export default class ColorPicker extends React.Component {
    state = {
        activeOptionIdx: 0,
    };

    SetActiveIdx(index) {
        this.setState(
            { activeOptionIdx: index }
        );
    };

    MakeOptionClassName(index) {
        const optionClass = "ColorPicker__option";
        const activeClass = 'ColorPicker__option--active';
        var stringClasses = optionClass;

        if (index === this.state.activeOptionIdx) {
            stringClasses = addNewClass(optionClass, activeClass);
        }

        return (stringClasses);
    };

    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const { label } = options[activeOptionIdx];

        console.log('active: ', label);

        return (
            <div className="ColorPicker">
                <h3 className="ColorPicker__tittle">Color picker</h3>
                <p>
                    Выбран цвет: {label}
                </p>
                <div>{
                    options.map(
                        ({ label, color }, index) =>
                            <button
                                key={label}
                                type="button"
                                className={this.MakeOptionClassName(index)}
                                style={{ backgroundColor: color, }}
                                onClick={() => this.SetActiveIdx(index)}
                            ></button>
                    )
                }</div>
            </div>
        );
    };
}