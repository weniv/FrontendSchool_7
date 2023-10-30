import React from 'react'

export default React.memo(function Info({ apples }) {

    const applesArr = Object.values(apples);

    // 가장 높은 당도와 가장 낮은 당도를 구하는 함수
    const sweetnessCalc = () => {
        const appleValues = applesArr.map((item) => item.sweetness);
        const result = { max: Math.max(...appleValues), min: Math.min(...appleValues) }

        return result;
    }

    return (
        <div className='board'>
            <p>현재 사과는 {applesArr.length} 개가 있습니다.</p>
            <p>당도가 가장 높은 사과는: {sweetnessCalc().max}</p>
            <p>당도가 가장 낮은 사과는: {sweetnessCalc().min}</p>
        </div>
    )
    // 비교 함수입니다. 리턴값이 false 일때만 컴포넌트를 재랜더링합니다.
}
    , (prevProps, nextProps) => {
        return Object.keys(prevProps.apples).length === Object.keys(nextProps.apples).length
    }
);
