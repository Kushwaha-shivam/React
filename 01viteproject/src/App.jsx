import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const IncreaseValue = () => {
    if (count < 10) {
      setCount(count + 1);

    }
  }
  const DecreaseValue = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={IncreaseValue}>Increase Value</button>
      <button onClick={DecreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
