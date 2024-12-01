export default function EventArgs2() {
    const current = e => {
        const type = e.target.dataset.ss;
        const d = new Date();
        switch (type) {
            case 'date':
                console.log(`${e.target.id} , ${type}: ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id} , ${type} : ${d.toLocaleTimeString()}`);
                break;
            default :
                console.log(`${e.target.id} , ${type} : ${d.toLocaleString()}`);
                break;
        }
    }

    return (
        <div>
            <button id={"dt"} data-ss={"datetime"} onClick={current}>현재 날짜 및 시각</button>
            <button id={"date"} data-ss={"date"} onClick={current}>현재 날짜</button>
            <button id={"time"} data-ss={"time"} onClick={current}>현재 시각</button>
        </div>
    )
};