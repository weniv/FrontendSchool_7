import {useState, useEffect} from 'react'

// useEffect(()=>{
	// state가 변경되어 렌더링 될 때 실행하는 부분!
	// 공부하려고 책 펴는 타이밍!
	// return()=>{
    // 언마운트 또는 다음 이펙트가 일어나기전에 실행하는 부분
    // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
    // 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠. 
    // 여러분들 시험 공부 하나를 마치고 다음 시험 공부 전에 책상 정리하는 느낌이랄까요..
	// }
// },[/*state값이 들어갑니다.(들어가지 않으면 최초 1번만 실행됩니다.*/)]) 

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1);
  }
  useEffect(()=>{
    console.log("이펙트~!");
    if (count%2===0) {
      console.log(count, "짝수입니다~!");
    } else {
      console.log(count, "홀수입니다~!");
    }
    return ()=>{
      console.log(count,"이펙트가 일어나기 직전입니다~!")
    }
  })
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;