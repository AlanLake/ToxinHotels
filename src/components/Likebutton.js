import React, {useState} from "react";

const Like = () => {
    const [counter, setCounter] = useState(0)

    return (
      <>
        <button onClick={() => {
            setCounter(counter + 1)
        }
        } className="like-button">
          <span>{counter}</span>
        </button>
      </>
    );
}

export default Like;