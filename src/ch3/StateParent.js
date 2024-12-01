import StateCounter from "./StateCounter";
import {useState} from "react";

export default function StateParent(){
    const [count, setCount] = useState(0);
    const update = step => setCount(c => c + step);
    return (
        <>
            <p>총 개수 : {count}</p>
            <StateCounter step={1} onUpdate={update} />
            <StateCounter step={5} onUpdate={update} />
            <StateCounter step={-1} onUpdate={update} />
        </>
    );
}