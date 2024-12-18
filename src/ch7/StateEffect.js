import {useEffect, useState} from "react";

export default function StateEffect({init}) {
    const [count, setCount] = useState(init);
    const [foo, setFoo] = useState('foo');

    useEffect(() => {
        console.log(`count is ${count}, foo is ${foo}`);

    });
    const handleClick = () => setCount(count + 1);

    return (
        <>
            <button onClick={() => setFoo(Date.now())}>Foo {foo}</button>
            <button onClick={handleClick}>카운트</button>
            <p>{count}번 클릭하였습니다.</p>
        </>
    );

};