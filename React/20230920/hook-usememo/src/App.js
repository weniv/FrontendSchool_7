import { useState, useMemo } from 'react'

function 부하() {
  // console.time();
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  // console.timeEnd();
  return s
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  let result = useMemo(() => {
    return 부하();
  }, [countTwo]);


  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo);
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <div>{countTwo}</div>
      <button onClick={handleCountUp}>UP!</button>
      <button onClick={handleCountUpTwo}>UP2!</button>
    </div>
  );
}
export default App;