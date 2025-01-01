// export default function TopPage() {
//   return <p>홈페이지입니다.</p>;
// }



// Code 8-3-21
// import { useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom';

// export default function TopPage() {
//   const [, setCount] = useOutletContext();
//   useEffect(() => setCount(c => c + 1), [setCount]);
//   return <p>홈페이지입니다.</p>;
// }



// Code 8-3-25
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import MyHeader from './MyHeader';

export default function TopPage() {
  const [, setCount] = useOutletContext();
  useEffect(() => setCount(c => c + 1), [setCount]);
  return (
    <>
      <MyHeader />
      <p>홈페이지입니다.</p>
    </>
  );
}



// Code 8-4-2 (8-3-21)
// import { useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom';

// export default function TopPage() {
//   const [, setCount] = useOutletContext();
//   useEffect(() => setCount(c => c + 1), [setCount]);
//   return <p>홈페이지입니다.</p>;
// }



// // Code 8-5-4
// import {useOutletContext} from "react-router-dom";
// import {useEffect} from "react";
//
// export default function TopPage() {
//   const [, setCount] = useOutletContext();
//   useEffect(() => setCount(c => c + 1),[setCount]);
//   return <p>홈페이지입니다.</p>;
// }