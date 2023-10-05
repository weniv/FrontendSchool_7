import './style.css';
import bg from './background.png';

let env;

if (process.env.NODE_ENV === 'development') {
    env = dev;
} else {
    env = pro;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${bg}"/>`;
})