import {memo} from "react";

export const MyButton = memo(({id, handleClick, children}) => {
    console.log(`MyButton is called: ${id}`);
    return (
        <button onClick={handleClick}>{children}</button>
    );
});

export const MyCounter = memo(({id, value}) => {
    console.log(`MyCounter is called:${id}`);
    return (
        <p>현재 값 : {value}</p>
    );
});