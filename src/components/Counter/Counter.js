import React from "react";
import Value from "./Value";
import Controls from "./Controls";

export default class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        counterValue: this.props.initialValue,
    };

    handleIncrement = () => {
        console.log("click on Увеличить");
        this.setState(prevState => ({ counterValue: prevState.counterValue + 1 }));
        console.log(this.state);
    };

    handleDecrement = () => {
        console.log("click on Уменьшить");
        this.setState(prevState => ({ counterValue: prevState.counterValue - 1 }));
        console.log(this.state);
    };

    render() {
        return (
            <div className="Counter">
                <Value value={this.state.counterValue} />

                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}