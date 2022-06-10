import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
// import Clock from "./Clock";
import ClockFunctional from "./ClockFunctional";
import Step from "./Step";


class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
      stepValue: 5,
    };
  }

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue = currentCounterValue + 1;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else if (action === "addX") {
        currentCounterValue += Number(this.state.stepValue);
      } else {
        currentCounterValue = 0;
      }
      return {
        counterValue: currentCounterValue,
      };
    });
  };

  stepCounter = (value) => {
    this.setState({stepValue: value})
  }

  toggleClock = () => {
    this.setState((prevState) => {
        return({
            showClock: !prevState.showClock
        });
    });
  }

  render() {

    let clockElement = "";

    if(this.state.showClock) {
      // clockElement = <Clock toggleClockMethod={this.toggleClock}/>;
      clockElement = <ClockFunctional toggleClockMethod={this.toggleClock}/>;
    } else {
      clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
    }

    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} />
        {clockElement}
        <Step changeStep={this.stepCounter}  />
      </div>
    );
  }
}

// function Counter(props) {
//   let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
//   return (
// <div classname="counter">
//   Counter:
//   <span classname="value">{props.initValue}</span>
// </div>
//   );
// }

export default Counter;
