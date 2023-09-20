// import React, { useState, useEffect, useLayoutEffect } from 'react'

// export default function LayoutEffect() {
//     const [num, setNum] = useState(0);

//     useLayoutEffect(() => {
//         for (let i = 0; i < 1000000000; i++) {

//         }
//         setNum((prev) => prev + 1); //사실은 엄청 오래걸리고 어려운 로직
//     }, []);

//     return (
//         <h1>{num}</h1>
//     )
// }


import { useState, useEffect, useLayoutEffect } from 'react'

function LayoutEffect() {
    const [value, setValue] = useState(100);

    useLayoutEffect(() => {
        if (value >= 1000) {
            setValue(300);
        }
    }, [value]);

    return (
        <div>
            <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
            <button onClick={() => { setValue(1000) }}>커져랏!</button>
            <button onClick={() => { setValue(200) }}>작아져랏!</button>
        </div>
    )
}

export default LayoutEffect;
