import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    // 에러정보를 관리합니다.
    const [err, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const logout = () => {
        setIsPending(true);
        // firebase의 로그아웃 함수
        signOut(appAuth).then(() => {
            // Sign-out successful.
            dispatch({ type: 'logout' });
            setIsPending(false);
        }).catch((error) => {
            // An error happened.
            setError(error);
            setIsPending(false);
            console.error(err);
        });
    }

    return { err, isPending, logout }
}