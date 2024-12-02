export default function ErrorRetryThrow() {
    if (Math.random() < 0.6) {
        throw new Error('Error is occured in MyApp2');
    }
    return (
        <p>잘 실행되었다.</p>
    )
};