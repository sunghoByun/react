import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import './RouterNav.css';
import {useState} from "react";

export default function RouterParam() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>접속자 수 : {count}</p>
            <ul>
                <li><NavLink to="/">홈</NavLink></li>
                <li><NavLink to="/book/9791158395179">
                    시작하세요! C# 12 프로그래밍</NavLink></li>
                <li><NavLink to="/book/9791158395186">
                    OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
                <li><NavLink to={"/book"} end>기본 도서</NavLink></li>
                <li><NavLink to={"/search/react/router/remix"}>검색 결과</NavLink></li>
                <li><NavLink to={"/bookQuery?isbn=979-1-1583-9512-4"}>게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리버전)</NavLink>
                </li>
            </ul>
            <hr/>
            <Outlet context={[count, setCount]}/>
        </>
    );
}



// Code 8-3-7
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   return (
//     <>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>
//       </ul>
//       <hr />
//       <Outlet />
//     </>
//   );
// }



// Code 8-3-10
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   return (
//     <>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//       </ul>
//       <hr />
//       <Outlet />
//     </>
//   );
// }



// Code 8-3-13
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   return (
//     <>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       <Outlet />
//     </>
//   );
// }



// Code 8-3-16
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   return (
//     <>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       <Outlet />
//     </>
//   );
// }



// Code 8-3-18
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   return (
//     <>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       <Outlet />
//     </>
//   );
// }



// Code 8-3-20
// import { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   // 카운트 수를 관리하기 위한 State를 준비한다.
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>접속자 수:{count}</p>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       {/* 컨텍스트에 count/setCount를 삽입 */}
//       <Outlet context={[count, setCount]} />
//     </>
//   );
// }



// Code 8-4-2
// import { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   // 카운트 수를 관리하기 위한 State를 준비한다.
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>접속자 수:{count}</p>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>        
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/weather/Seoul">서울 날씨</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       {/* 컨텍스트에 count/setCount를 삽입 */}
//       <Outlet context={[count, setCount]} />
//     </>
//   );
// }



// Code 8-4-4
// import { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   // 카운트 수를 관리하기 위한 State를 준비한다.
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>접속자 수:{count}</p>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>        
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/weather/Seoul">서울 날씨</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       {/* 컨텍스트에 count/setCount를 삽입 */}
//       <Outlet context={[count, setCount]} />
//     </>
//   );
// }



// Code 8-4-7
// import { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   // 카운트 수를 관리하기 위한 State를 준비한다.
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>접속자 수:{count}</p>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>        
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/weather/Seoul">서울 날씨</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       {/* 컨텍스트에 count/setCount를 삽입 */}
//       <Outlet context={[count, setCount]} />
//     </>
//   );
// }



// Code 8-4-12
// import { useState } from 'react';
// import { NavLink, Outlet, useNavigation } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   // 카운트 수를 관리하기 위한 State를 준비한다.
//   const [count, setCount] = useState(0);

//   // 내비게이션 정보 획득
//   const navigation = useNavigation();

//   return (
//     <>
//       <p>접속자 수:{count}</p>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>        
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/weather/Seoul">서울 날씨</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <Outlet context={[count, setCount]} />
//       {
//         // 트랜지션 상태에 따라 출력을 분기
//         navigation.state === 'loading' ?
//           <p>Loading...</p> :
//           <Outlet />
//       }
//     </>
//   );
// }



// Code 8-4-17
// import { useState } from 'react';
// import { NavLink, Outlet, useNavigation } from 'react-router-dom';
// import './RouterNav.css';

// export default function RouterParam() {
//   // 카운트 수를 관리하기 위한 State를 준비한다.
//   const [count, setCount] = useState(0);

//   // 내비게이션 정보 획득
//   const navigation = useNavigation();

//   return (
//     <>
//       <p>접속자 수:{count}</p>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/form">도서 등록 양식</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>        
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/weather/Seoul">서울 날씨</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       <Outlet context={[count, setCount]} />
//     </>
//   );
// }



// Code 8-4-22
// import { useState } from 'react';
// import { NavLink, Outlet, useNavigation } from 'react-router-dom';
// import './RouterNav.css';
//
// export default function RouterParam() {
//   // 카운트 수를 관리하기 위한 State를 준비한다.
//   const [count, setCount] = useState(0);
//
//   // 내비게이션 정보 획득
//   const navigation = useNavigation();
//
//   return (
//     <>
//       <p>접속자 수:{count}</p>
//       <ul>
//         <li><NavLink to="/">홈</NavLink></li>
//         <li><NavLink to="/book/form">도서 등록 양식</NavLink></li>
//         <li><NavLink to="/books">도서 목록</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9517-9">
//           시작하세요! C# 12 프로그래밍</NavLink></li>
//         <li><NavLink to="/book/979-1-1583-9518-6">
//           OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
//         <li><NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
//           게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽 활용법(쿼리 버전)</NavLink></li>
//         <li><NavLink to="/bookState" state="979-1-1583-9511-7">
//           디자인을 위한 미드저니 완벽 활용법(State 버전)</NavLink></li>
//         <li><NavLink to="/book" end>기본 도서</NavLink></li>
//         <li><NavLink to="/search/react/router/remix">검색 결과</NavLink></li>
//         <li><NavLink to="/weather/Seoul">서울 날씨</NavLink></li>
//         <li><NavLink to="/nothing/foo/bar">존재하지 않는 페이지</NavLink></li>
//       </ul>
//       <hr />
//       <Outlet context={[count, setCount]} />
//     </>
//   );
// }