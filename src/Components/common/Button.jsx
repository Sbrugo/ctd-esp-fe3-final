import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primario", "btn--delineado", "btn--test"];

const SIZES = ["btn--mediano", "btn--grande", "btn--chico"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
