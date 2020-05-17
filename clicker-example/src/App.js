import React from "react";
import "./App.css";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Count: 0,
        };
    }

    onAdd() {
        let x = this.state.Count + 1;
        this.setState({
            Count: x,
        });
    }
    onMinus() {
        let x = this.state.Count - 1;
        this.setState({
            Count: x,
        });
    }
    onReset() {
        this.setState({
            Count: 0,
        });
    }

    render() {
        return (
            <div className="parent">
                <div className="parent-display">
                    <Display count={this.state.Count} />
                </div>
                <div className="parent-buttons">
                    <Add onClick={() => this.onAdd()} />
                    <Reset onClick={() => this.onReset()} />
                    <Minus onClick={() => this.onMinus()} />
                </div>
            </div>
        );
    }
}

function Display(props) {
    //take count as props and display it
    return <p> {props.count} </p>;
}

function Button(props) {
    //accepts color, displayIcon and function to update counter value as props
    let icon = "fa fa-" + props.displayIcon;
    return (
        <button
            style={{ "background-color": props.color, icon: "plus" }}
            className="button"
            onClick={props.onclick}
        >
            <i class={icon} style={{ fontSize: 60 }}></i>
        </button>
    );
}

function Add(props) {
    //It will Increment counter by one. It will be Green in color and plus as display icon
    return <Button color="green" displayIcon="plus" onclick={props.onClick} />;
}

function Minus(props) {
    //It will decrement counter by one. It will be Red in color and minus as display icon
    return <Button color="red" displayIcon="minus" onclick={props.onClick} />;
}

function Reset(props) {
    // It will Reset count to zero. It will be Yellow in color and reset as display icon
    return <Button color="yellow" displayIcon="repeat" onclick={props.onClick} />;
}

export default Parent;
