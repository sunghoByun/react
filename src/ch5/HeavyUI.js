function sleep(delay) {
    let start = Date.now();
    while (Date.now() - start < delay) {

    }
}

export default function HeavyUI({delay}) {
    sleep(delay);
    return <p>지연 시간은 {delay}밀리초</p>
};