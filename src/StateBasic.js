import {useState} from "react";

export default function StateBasic({init}) {
    const [count, setCount] = useState(init);
    const handleClick = () => setCount(count + 1);

    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{count}번 클릭했습니다.</p>
            
        </>
    );
};