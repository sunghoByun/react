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
    <FormBasic/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
