import React, { useState } from "react";
import Counterchild from "./Counterchild";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Counter App Using Props</h1>
      <div>
        <Counterchild
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </div>
    </div>
  );
};

export default CounterApp;
