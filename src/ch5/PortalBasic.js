import {createPortal} from "react-dom";
import {useState} from "react";
import './PortalBasic.css';

export default function PortalBasic() {
    const [show, setShow] = useState(false);

    const handleDialog = () => setShow(s => !s);

    return (
        <form>
            <button type={"button"} onClick={handleDialog} disabled={show}>
                다이얼로그 표시
            </button>
            {show && createPortal(
                <div className={"dialog"}>
                    <p>Portal에서 생성된 대화상자</p>
                    <button type={"button"} onClick={handleDialog}>닫기</button>
                </div>,
                document.getElementById('dialog')
            )}
        </form>
    );
};