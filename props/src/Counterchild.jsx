import React from 'react';

const Counterchild = (props) => {
  return (
    <div style={{textAlign:'center', marginTop:"30px"}}>
      <p>Count: {props.count}</p>
      <button style={{height:"30px", width:"100px"}} onClick={props.increment}>Increment</button>
      <button style={{height:"30px", width:"100px",marginLeft:"30px"}} onClick={props.decrement}>Decrement</button>
    </div>
  );
}

export default Counterchild;
