import React from 'react'

export default React.memo(function NewBtn({ onClick }) {
    return (
        <button className='new-apple' onClick={onClick}>사과 추가</button>
    )
});
