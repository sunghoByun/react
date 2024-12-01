import './EventPassive.css';
import {useRef, useEffect} from "react";

export default function EventPassive() {
    const handleWheel = e => e.preventDefault();

    const divRef = useRef(null);
    useEffect()
    return (
        <div className={"box"} onWheel={handleWheel}>예를 들어 Wheel 이벤트 핸들러에서...</div>
    );
};