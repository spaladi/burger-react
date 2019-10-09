import React from "react";
import "./Input.css";

const input = props => {
  let inputEle = null;
  const classes = ["InputElement"];
  if (props.touched && props.invalid) {
    classes.push("Invalid");
  }
  switch (props.eleType) {
    case "input":
      inputEle = (
        <input
          className={classes.join(" ")}
          {...props.eleConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
      break;
    case "textarea":
      inputEle = (
        <input
          className={classes.join(" ")}
          {...props.eleConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
      break;
    case "select":
      inputEle = (
        <select
          className={classes.join(" ")}
          name={props.name}
          value={props.value}
          onChange={props.onChangeHandler}
        >
          {props.eleConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputEle = (
        <input
          className={classes.join(" ")}
          {...props.eleConfig}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      );
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputEle}
    </div>
  );
};

export default input;
