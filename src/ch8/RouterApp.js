import {Link, Outlet} from "react-router-dom";

export default function RouterApp() {
    return (
        <>
            <ul>
                <li><Link to={"/"}>홈</Link></li>
                <li><Link to={"/article"}>기사</Link></li>
                <li><Link to={"/about"}>회사 소개</Link></li>
            </ul>
            <hr />
            <Outlet />
        </>
    );
};