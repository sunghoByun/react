import {MyAppContext} from './HookContext';
import {useContext} from "react";

export function HookContextChild() {
    return (
        <div id={"c_child"}>
            <HookContextChildGrand/>
        </div>
    )
}

export function HookContextChildGrand() {
    const {title, lang} = useContext(MyAppContext);
    return (
        <div id ="c_child_grand">
            {title}({lang})
        </div>
    )
}