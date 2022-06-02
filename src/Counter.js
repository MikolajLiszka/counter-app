import React from "react";
import './Counter.css';

function Counter(props) {
  return (
    <div classname="counter">
      Counter:
      <span classname="value">{Math.floor(Math.random() * (108 - 1 + 1) + 1)}</span>
    </div>
  );
}

export default Counter;
