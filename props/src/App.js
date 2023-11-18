import React from 'react';
import CardA from './CardA';
import CardB from './CardB';
import CounterApp from './counter';
function App() {
  return (
    <>
     <CardA text="Props " text2 = "passing" />
     <CardB />
     <CounterApp />

    </>
     
  );
}

export default App;


