import React from 'react'
import loading from '../images/Loading_icon.gif';

export default function Loading() {
    return (
        <img src={loading} alt="" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    )
}
