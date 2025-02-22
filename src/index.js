import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateBasic from "./StateBasic";
import books from './book';
import ForList from "./ForList";
import ForItem from "./ch3/ForItem";
import ForNest from "./ch3/ForNest";
import SelectStyle from "./ch3/SelectStyle";
import cn from 'classnames';
import MyHello from "./ch3/MyHello";
import TypeProp from "./ch3/TypeProp";
import StateParent from "./ch3/StateParent";
import EventMouse from './ch3/EventMouse';
import EventCompare from './ch3/EventCompare';
import EventKey from './ch3/EventKey';
import EventArgs2 from './ch3/EventArgs2';
import EventPassive from "./ch3/EventPassive";
import StateTodo from "./ch4/StateTodo";
import FormBasic from "./ch4/FormBasic";
import FormYup from "./ch4/FormYup";
import LazyBasic from "./ch5/LazyBasic";
import SuspenseSimple from "./ch5/SuspenseSimple";
import SuspenseResult from "./ch5/SuspenseResult";
import ProfilerBasic from "./ch5/ProfileBasic";
import PortalBasic from "./ch5/PortalBasic";
import ErrorRoot from "./ch5/ErrorRoot";
import ErrorRetryRoot from "./ch5/ErrorRetryRoot";
import ErrorEventRoot from "./ch5/ErrorEventRoot";
import MaterialBasic from "./ch6/MaterialBasic";
import MaterialDrawer from "./ch6/MaterialDrawer";
import MaterialGrid from "./ch6/MaterialGrid";

import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./ch6/theme";
import MaterialMode from "./ch6/MaterialMode";
import FormMui from "./ch6/FormMui";
import QueryPre from "./ch6/QueryPre";
import StateEffect from "./ch7/StateEffect";
import HookTimer from "./ch6/HookTimer";
import HookEffect from "./ch7/HookEffect";
import HookRefNg from "./ch7/HookRefNg";
import HookRefForward from "./ch7/HookRefForward";
import HookCallbackRef from "./ch7/HookCallbackRef";
import HookReducerUp from "./ch7/HookReducerUp";
import HookContext from "./ch7/HookContext";
import MyThemeProvider from "./ch7/MyThemeProvider";
import HookThemeButton from "./ch7/HookThemeButton";
import {RecoilRoot} from "recoil";
import RecoilTodo from "./ch7/RecoilTodo";
import RecoilTodoUp from "./ch7/RecoilTodoUp";
import HookMemo from "./ch7/HookMemo";
import HookTransition from "./ch7/HookTransition";
import HookDefered from "./ch7/HookDeferred";
import HookCustom from "./ch7/HookCustom";
import {RouterProvider} from "react-router-dom";
import routeBasic from "./ch8/routeBasic";
import routesLink from "./ch8/routesLink";
import routeParam from "./ch8/routeParam";
import {HelmetProvider} from "react-helmet-async";
import routesHandle from "./ch8/routesHandle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    //   <StateBasic init={0}/>
    //   <ForList src={books}/>
    //   <ForNest src={books}/>
    //   <SelectStyle mode={'dark'}/>
    // <TypeProp prop6={{name: '홍길동', age: 35, sex: '남성'}}/>
    // <StateParent/>
    // <EventMouse alt={"로고 이미지"}
    //             beforeSrc={"https://www.web-deli.com/image/linkbanner_l.gif"}
    //             afterSrc={"https://www.web-deli.com/image/home_chara.gif"} />
    // <EventCompare/>
    // <EventKey/>
    // <EventArgs2/>
    // <FormBasic/>
    // <FormYup/>
    // <LazyBasic/>
    // <SuspenseSimple/>
    // <SuspenseResult/>
    // <ProfilerBasic/>
    // <>
    //     <div id={"dialog"}></div>
    //     <PortalBasic/>
    // </>
    // <ErrorRoot/>
    // <ErrorRetryRoot/>
    // <ErrorEventRoot/>
//     ch6
//     <MaterialDrawer/>
//     <ThemeProvider theme={theme}>
//         <CssBaseline/>
//         <MaterialGrid/>
//     </ThemeProvider>
//     <MaterialMode/>
//     <FormMui/>
//     <QueryPre/>

    // <StateEffect init={0}/>
    // <HookTimer init={10}/>
    // <HookEffect init={10}/>
    // <HookRefNg/>
    // <HookReducerUp init={3}/>
    // <HookContext/>
    // <RecoilRoot>
    //     <RecoilTodo/>
    // </RecoilRoot>
    // <StateEffect init={0}/>
    // <RecoilRoot>RecoilRoot
    //     <RecoilTodoUp/>
    // </RecoilRoot>
    // <HookMemo/>
    // <HookTransition/>
    // <HookDefered/>
    // <HookCustom/>
    // <RouterProvider router={routeParam}/>
    <HelmetProvider>
        <RouterProvider router={routeParam} />
    </HelmetProvider>
);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
