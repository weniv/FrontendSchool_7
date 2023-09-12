import React from 'react';
import "./MenuListItem.css";

export default function MenuListItem(props) {

    const onitemClick = () => {
        props.setCurrentMood(props.mood)
    }

    console.log(props);
    return (
        <li>
            <button onClick={onitemClick} className='btn-item'>기분이 : {props.mood}</button>
        </li>
    )
}
