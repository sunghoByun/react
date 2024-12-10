import {useEffect, useState} from "react";
import './HookTimer.css';
export default function HookTimer({init}) {
    const [count, setCount] = useState(init);

    useEffect(() => {
        const t = setInterval(() => {
            setCount(c => c - 1);
        }, 100);

        return () => {
            clearInterval(t);
        }
    }, []);

    return (
        <div className={count < 0 ? 'warn' : ''}>
            현재 카운트 : {count}
        </div>
    )
};