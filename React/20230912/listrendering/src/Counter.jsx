import React from 'react'
import { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);

        // state 함수가 실행되면 state 가 변경됩니다. state가 변경되면 컴포넌트가 다시 랜더링 됩니다.
        // 이때 state 함수는 바로 실행되지 않고 기다렸다가 가장 마지막에 호출된 state 함수만 실행됩니다.
        // 이런 현상이 발생하는 이유는 업데이트는 비용이 큰 작업이고, state 함수는 비동기적으로 동작하기 때문이다.

    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Count 의 값은 :{count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
