
// 액션을 생성하는 함수
export const addNumber = () => {
    return { type: 'ADD' }
}
export const subtractNumber = () => {
    return { type: 'SUBTRACT' }
}

// 초기 state 값
const initState = {
    stock: 10,
    goods: 1
}

const goodsReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                stock: state.stock - 1,
                goods: state.goods + 1
            }
        case "SUBTRACT":
            return {
                ...state,
                stock: state.stock + 1,
                goods: state.goods - 1
            }
        default:
            return state;
    }
}

export default goodsReducer;