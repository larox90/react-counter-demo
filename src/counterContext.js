import React from 'react';
import { useState } from 'react/cjs/react.development';

export const CounterContext = React.createContext({
  counterInterval: null,
  setCounterInterval: () => {}
})

export const CounterContextProvider = (props) => {

  const [counterInterval, setCounterInterval] = useState(null);
  
  return (
    <CounterContext.Provider
      value={{
        counterInterval,
        setCounterInterval
      }}
    >
      { props.children }
    </CounterContext.Provider>
  );
}