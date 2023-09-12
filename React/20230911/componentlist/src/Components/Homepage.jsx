import React from 'react'

export default function Homepage({ setLogin }) {
    return (
        <main>
            <h1>홈페이지에 오신것을 환영합니다!</h1>
            <button onClick={() => setLogin(false)}>로그아웃</button>
        </main>
    )
}
