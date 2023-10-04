import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseTotal() {

    // 모든 지출 내역 불러오기
    const expenseList = useSelector((store) => {
        console.dir(store);
        return store.expense.expenseList
    });

    // reduce를 이용해 모든 price를 더합니다.
    const totalExpense = expenseList.reduce((acc, item) => {
        return acc + item.price
    }, 0);

    const income = useSelector((store) => store.expense.income);

    // 잔액을 계산합니다.
    const balance = income - totalExpense;

    return (
        <>
            <div>
                <span>총 지출 : </span>
                <span>₩ {totalExpense}</span>
            </div>
            <div>
                <span>잔액 : </span>
                <span>₩ {balance}</span>
            </div>
        </>
    )
}
