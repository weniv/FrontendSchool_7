import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from 'redux';
import rootReducer from "./modules";
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const container = document.getElementById("root");
const root = createRoot(container);


// Provider 를 통해 APP 컴포넌트 안의 모든 컴포넌트가 store 에 접근할 수 있도록 합니다.
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// import { createStore } from 'redux';

// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const number = document.getElementById('number');
// const quantity = document.getElementById('quantity');
// const totalPrice = document.getElementById('total');

// const PRICE = 17500;

// function countReducer(state = 0, action) {
//     switch (action.type) {
//         case 'ADD':
//             return state + 1;
//         case 'SUBSTRACT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// const store = createStore(countReducer);


// // let count = 0;

// // const updateResult = (c) => {
// //     number.textContent = count;
// //     quantity.textContent = c;
// //     totalPrice.textContent = c * PRICE;
// // }

// const addNumber = () => {
//     // count += 1;
//     // minus.disabled = false;
//     // updateResult(count);
//     store.dispatch({ type: 'ADD' });
// }

// const substractNumber = () => {
//     // count -= 1;
//     // plus.disabled = false;
//     // updateResult(count);
//     store.dispatch({ type: "SUBSTRACT" });
// }

// // number.textContent = count;
// // updateResult(count);

// // render 함수
// const handleWrite = () => {
//     number.textContent = store.getState();
//     quantity.textContent = store.getState();
//     totalPrice.textContent = store.getState() * PRICE;
// }

// store.subscribe(handleWrite);

// plus.addEventListener('click', addNumber);
// minus.addEventListener('click', substractNumber);