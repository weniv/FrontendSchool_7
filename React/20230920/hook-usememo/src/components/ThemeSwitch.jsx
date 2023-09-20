import React, { useContext } from 'react'
import { ThemeContext } from '../DarkMode'


export default function ThemeSwitch() {
    // 클릭이벤트가 발생하면 상태끌어올리기를 통해서 setTheme 함수를 호출해서 theme 를 업데이트합니다.
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>테마 전환</button>
    )
}
