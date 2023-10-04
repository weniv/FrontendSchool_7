import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpenseAction } from '../../store/expense/expense-slice';

export default function ExpenseInput() {

    const dispatch = useDispatch();
    // 지출 이름을 관리합니다.
    const [name, setName] = useState('');
    // 지출 금액을 관리합니다.
    const [price, setPrice] = useState(0);

    function submit(event) {
        event.preventDefault();
        dispatch(addExpenseAction({ name, price }));
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label>
                    지출 상품 명 :
                    <input type="text" placeholder='예 : "사과"' onChange={(event) => setName(event.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    지출 상품 금액 :
                    <input type="number" placeholder='예 : 5000' onChange={(event) => setPrice(parseInt(event.target.value))} />
                </label>
            </div>
            <button type='submit'>추가</button>
        </form>
    )
}
