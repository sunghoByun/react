import {useState} from "react";

export default function EventCompare() {
    const [result, setResult] = useState();

    const handleIn = e => setResult(r => `${r}Enter: ${e.target.id}<br/>`);
    const handleOut = e => setResult(r => `${r}Leave: ${e.target.id}<br/>`);
    return (
        <>
            <div id={"outer"} onMouseOver={handleIn} onMouseOut={handleOut}>
                외부 (outer)
                <p id={"inner"}>
                    내부 (inner)
                </p>
            </div>
            <div dangerouslySetInnerHTML={{__html:result}}></div>
        </>
    );

};