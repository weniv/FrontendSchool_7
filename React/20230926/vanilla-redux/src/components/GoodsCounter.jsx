import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subtractNumber } from '../modules/goodsCounter';

export default function GoodsCounter() {

    // store의 state 접근하도록 합니다.
    const { stock, goods } = useSelector((state) => {
        return {
            stock: state.goodsReducer.stock,
            goods: state.goodsReducer.goods,
        }
    });

    const dispatch = useDispatch();

    // 디스패치 함수에 액션을 인자로 전달하여 실행합니다.
    const onSubtractNumber = () => dispatch(subtractNumber());
    const onAddNumber = () => dispatch(addNumber());


    return (
        <>
            <h1>Product Detail</h1>
            <h2>프론트 개발자 전동 칫솔</h2>
            <span><strong>17,500</strong>원</span>
            <div id="counter-box">
                <button type="button" id="minus" onClick={onSubtractNumber} disabled={goods > 0 ? false : true}>MINUS</button>
                <span id="number">{goods}</span>
                <button type="button" id="plus" onClick={onAddNumber} disabled={stock > 0 ? false : true}>PLUS</button>
            </div>
            <div>총 수량 <strong id="quantity">{goods}</strong></div>
            <div><strong id="total">{goods * 17500}</strong>원</div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </>
    )
}
