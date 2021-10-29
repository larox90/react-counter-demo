import { useContext, useEffect, useState } from 'react';
import './App.css';
import { CounterContext } from './counterContext';

function App() {
  let [counter, setCounter] = useState(20);
  const [counting, setCounting] = useState(false);
  const counterCtx = useContext(CounterContext);
  const { counterInterval, setCounterInterval } = counterCtx;
  useEffect(() => {
    if (counting && counter > 0) {
      const newInterval = setInterval(() => { setCounter(counter--) }, 1000);
      if (counterInterval) {
        clearInterval(counterInterval);
      }
      setCounterInterval(newInterval);
    } else {
      clearInterval(counterInterval);
    }
    return () => {
      return clearInterval(counterInterval);
    }
  }, [counting]);

  useEffect(() => {
    if (counter <= 0) {
      clearInterval(counterInterval);
    }
  }, [counter, counterInterval]);

  const handleInputChange = (e) => {
    setCounter(e.target.value);
  }

  const handleCountingChange = () => {
    setCounting(!counting);
  }
  return (
    <div className="App">
      <h1>{counter} segundos</h1>
      <input type="number" value={counter} onChange={handleInputChange} disabled={counting} />
      <br />
      <div>
        <button disabled={counting} onClick={handleCountingChange}>Start</button>
        <button disabled={!counting} onClick={handleCountingChange} >Stop</button>
      </div>
    </div>
  );
}

export default App;
