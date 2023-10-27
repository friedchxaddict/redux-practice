import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSliceAction } from "./slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  return (
    <>
      <div classname="container">
        <h3>Counter App Using Redux Toolkit</h3>
        <h1>{count}</h1>
        <div classname="btn-container">
          <button
            onClick={() => {
              dispatch(counterSliceAction.incrementCount());
            }}>
            {" "}
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(counterSliceAction.decrementCount());
            }}>
            {" "}
            Decrement
          </button>
          <button
            onClick={() => {
              dispatch(counterSliceAction.resetCount());
            }}>
            {" "}
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
