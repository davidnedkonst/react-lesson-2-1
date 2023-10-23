import React from "react";
import Value from "./Value";
import Controls from "./Controls";
import "./Counter.css"

export default class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        counterValue: this.props.initialValue,
    };

    onIncrement = () => {
        console.log("click on Увеличить");
        this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }));
    };

    onDecrement = () => {
        console.log("click on Уменьшить");
        this.setState(prevState => ({ counterValue: prevState.counterValue - 1 }));
    };

    render() {
        const { counterValue } = this.state;

        return (
            <div className="Counter">
                <h3 className="Counter__tittle">Counter</h3>

                <Value
                    value={counterValue}
                    
                />

                <Controls
                    onIncrement={this.onIncrement}
                    onDecrement={this.onDecrement}
                />
            </div>
        );
    }
}