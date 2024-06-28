import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onClickButton = (buttonVal) => {
    if(buttonVal === "C"){
      setCalVal("");
    }else if(buttonVal === "="){
      let newDisplayVal = eval(calVal);
      setCalVal(newDisplayVal)
    }else{
      let newDisplayVal = calVal+buttonVal;
      setCalVal(newDisplayVal);
    }
  }

  return (
    <div className={styles.displayCal}>
      <div className={styles.calculator}>
        <Display displayVal={calVal}></Display>
        <Buttons onClickButton={onClickButton}></Buttons>
      </div>
    </div>
  );
}

export default App;
