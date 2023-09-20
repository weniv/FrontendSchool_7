import React, { createContext, useState } from 'react'
import ThemeComponent from './components/ThemeComponent'
import ThemeSwitch from './components/ThemeSwitch'


const ThemeContext = createContext();

function DarkMode() {

    const [theme, setTheme] = useState("light");

    // setTheme 함수를 호출해서 theme의 상태를 변경합니다.
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === 'light' ? 'dark' : 'light'
        });
    }

    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ThemeComponent />
                <ThemeSwitch />
            </ThemeContext.Provider>
        </div>
    )
}

export { DarkMode, ThemeContext }
