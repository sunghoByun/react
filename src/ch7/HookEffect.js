import {useEffect, useLayoutEffect, useState} from "react";
import "../ch6/HookTimer";

const sleep = delay => {
    const start = Date.now();

    while (true) {
        if (Date.now() - start > delay) {
            break;
        }
    }
};

export default function HookEffect({init}) {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        console.log('start effect');
        sleep(5000);
        setCount(init);
        console.log('end effect');
    }, []);

    const handleClick = () => setCount(count + 1);


    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{count}번 클릭했습니다.</p>
        </>
    );
};