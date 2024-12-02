import {ErrorBoundary} from "react-error-boundary";
import ErrorThrow from "./ErrorThrow";

export default function ErrorRoot() {
    return (
        <>
            <h3>Error Boundary의 기본</h3>
            <ErrorBoundary fallback={<div></div>}>
                <ErrorThrow/>
            </ErrorBoundary>
        </>
    );
};