import React, { useState } from 'react'
import Login from './Components/Login'
import Homepage from './Components/Homepage';

export default function App3() {
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);


    return (
        login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />
    )
}
