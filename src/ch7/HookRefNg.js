import {useRef, useState} from "react";

export default function HookRefNg() {
    const id = useRef(null);
    const [count, setcount] = useState(0);

    const handleStart = () => {
        if (id.current === null) {
            id.current = setInterval(() => setcount(c => c + 1), 1000);
        }
    };

    const handleEnd = () => {
        clearInterval(id.current);
        id.current = null;
    };

    return (
        <>
            <button onClick={handleStart}>시작</button>
            <button onClick={handleEnd}>종료</button>
            <p>{count}초 경과</p>
        </>
    )
};