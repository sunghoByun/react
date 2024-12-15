import {counterAtom} from "../store/atom";
import {useRecoilState} from "recoil";

export default function RecoilCounter() {
    const [counter, setCounter] = useRecoilState(counterAtom);

    const handleClick = () => {
        setCounter(c => c + 1);
    }

    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{counter}번 클릭하였습니다.</p>
        </>
    )
};