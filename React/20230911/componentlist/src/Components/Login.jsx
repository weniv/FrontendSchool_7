import React, { useState } from 'react'

export default function Login({ infoUser, setLogin }) {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleLoginInput = (event) => {
        console.log(event.target.value);
        setId(event.target.value);
    }

    const handlePasswordInput = (event) => {
        console.log(event.target.value);
        setPw(event.target.value);
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (id === '') {
            alert("아이디를 입력하지 않았습니다.");
        } else if (pw === '') {
            alert("패스워드를 입력하지 않았습니다.");
        }
        console.log(infoUser);
        if (id === infoUser.idUser && pw === infoUser.pwUser.toString()) {
            setLogin(true);
        }

        console.log(`id : ${id}, pw : ${pw}`);
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 :
                <input type="text" onChange={handleLoginInput} />
            </label>
            <br />
            <label>
                비밀번호 :
                <input type="password" onChange={handlePasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}
