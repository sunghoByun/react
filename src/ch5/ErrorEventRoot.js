import './ErrorEvent';
import {ErrorBoundary} from "react-error-boundary";
import ErrorThrow from "./ErrorThrow";
import ErrorEvent from "./ErrorEvent";

export default function ErrorEventRoot() {
    const handleFallback = ({error, resetErrorBoundary}) => {
        const handleClick = () => resetErrorBoundary();

        const handleReset = () => console.log('Retry!!');

        return (
            <>
                <h3>Error Boundary의 기본</h3>
                <ErrorBoundary onReset={handleReset} fallbackRender={handleFallback}>
                    <ErrorEvent/>
                </ErrorBoundary>
            </>
        );
    };
};