import React, { useState } from "react";

const Like = () => {
  const [counter, setCounter] = useState(0);
  function clickHandler() {
    let btn = document.getElementById("like-button");
    if (!btn.classList.contains("like-button-active")) {
      setCounter(counter + 1);
      btn.classList.add("like-button-active");
    } else {
      setCounter(counter - 1);
      btn.classList.remove("like-button-active");
    }
  }
  return (
    <>
      <button onClick={clickHandler} className="like-button" id="like-button">
        <span>{counter}</span>
      </button>
    </>
  );
};

export default Like;
