import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RouterApp from './RouterApp';
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";
import RouterNav from "./RouterNav";

// const routesLink = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path={'/'} element={<RouterApp/>}>
//             <Route index element={<TopPage/>}/>
//             <Route path={"article"} element={<ArticlePage/>}/>
//             <Route path={"about"} element={<AboutPage/>}/>
//         </Route>
//
//     )
// );

const routesLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterNav/>}>
            <Route index element={<TopPage/>}/>
            <Route path={"article"} element={<ArticlePage/>}/>
            <Route path={"about"} element={<AboutPage/>}/>
        </Route>

    )
);


export default routesLink;