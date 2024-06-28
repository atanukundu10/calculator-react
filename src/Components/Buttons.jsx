import React from "react";
import styles from "./Buttons.module.css";

function Buttons({ onClickButton }) {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((buttonVal) => (
        <button
          key={buttonVal}
          className={styles.button}
          onClick={() => onClickButton(buttonVal)}
        >
          {buttonVal}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
