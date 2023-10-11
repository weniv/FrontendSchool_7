import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

export default function Header() {
    return (
        <header>
            <div className={styles["header-wrap"]}>
                <h1><Link to="/"><img className={styles.logo} src={logo} alt="두근두근 비밀일기" /></Link></h1>
                <div>
                    <Link to="/signup" className={"btn-join"}>회원가입</Link>
                </div>
            </div>
        </header>
    )
}