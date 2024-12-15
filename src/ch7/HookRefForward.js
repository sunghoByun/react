import {useEffect, useRef} from "react";
import MyTextBox from "./MyTextBox";

export default function HookRefForward() {
    const text = useRef(null);

    useEffect(() => {
        text.current?.focus();
    }, []);

    return (
        <MyTextBox label={"name"} ref={text}/>
    )
};