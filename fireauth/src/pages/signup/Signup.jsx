import React from 'react'
import styles from '../login/Login.module.css'
import { useState } from 'react'


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
    // 때문에 다른 변수명을 사용하지 말아주세요. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
    const [displayName, setDisplayName] = useState('');

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password, displayName);
    }


    return (
        <>
            <main>
                <h2 className={styles["img-title"]}>

                    {/* svg 코드는 생략하겠습니다. */}

                    <strong className={styles.line}>회원가입</strong>
                </h2>

                <form className={styles["form-wrap"]} onSubmit={handleSubmit}>
                    <label className="label-style" htmlFor="user-email">이메일</label>
                    <input className="input-style" id="user-email" type="email" required onChange={handleData} value={email} />

                    <label className="label-style" htmlFor="user-pw">비밀번호</label>
                    <input className="input-style" id="user-pw" type="password" required onChange={handleData} value={password} autoComplete='currnet-password' />

                    <label className="label-style" htmlFor="user-nickname">닉네임</label>
                    <input className="input-style" id="user-nickname" type="text" required onChange={handleData} value={displayName} ></input>

                    <button className="black-btn" type="submit">회원가입</button>
                </form>
            </main>

            <footer>
                <p>Copyright 2023. WENIV All rights reserved.</p>
            </footer>
        </>
    )
}