import React from 'react'

// let guest = 0;

function Cup({ guest }) {
    console.log(`cup ${guest}`);
    // guest = guest + 1;
    return <h2>{guest}번 손님을 위한 컵입니다.</h2>
}


export default function App3() {
    return (
        <div>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
            <Cup guest={4} />
            <Cup guest={5} />
            <Cup guest={6} />
            <Cup guest={7} />
        </div>
    )
}
