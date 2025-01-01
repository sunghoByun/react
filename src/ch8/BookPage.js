// import { useParams } from 'react-router-dom';
//
// export default function BookPage() {
//   // 경로 매개변수 가져오기
//   const params = useParams();
//   return <p>ISBN 코드 {params.isbn}의 페이지입니다.</p>;
// }


//
// // Code 8-3-6
// import { useParams } from 'react-router-dom';
//
// export default function BookPage() {
//   // 경로 매개변수 가져오기
//   const { isbn = '979-1-1583-9517-9' } = useParams();
//   return <p>ISBN 코드 {isbn}의 페이지입니다. </p>;
// }
//


// Code 8-3-26
import { useParams } from 'react-router-dom';
import MyHeader from './MyHeader';
import books from '../ch7/books';

export default function BookPage() {
  // 경로 매개변수 가져오기
  const {isbn = '9791158395179'} = useParams();
  const {title, summary} = books.find(b => isbn === b.isbn);

  return (
      <>
        <MyHeader title={title} keywords={title}
                  description={summary}/>
        <p>ISBN 코드 {isbn}의 페이지입니다. </p>
      </>
  );
};

//
//
// // Code 8-4-1
// import { useParams } from 'react-router-dom';
//
// export default function BookPage() {
//   const { isbn = '979-1-1583-9517-9' } = useParams();
//   // ISBN 코드의 형식을 따르지 않으면 오류
//   if (!/979-1-[0-9]{2,7}-[0-9]{2,7}-[0-9X]/.test(isbn)) {
//     throw new RangeError('ISBN is invalid!!');
//   }
//
//   return (<p>ISBN 코드 {isbn}의 페이지입니다.</p>);
// }


//   // 例外をスローする
//   // 
//   // if (!/978-4-[0-9]{2,7}-[0-9]{2,7}-[0-9X]/.test(isbn)) {
//   //   throw new RangeError('ISBN is invalid!!');
//   // }
//   // return <p>ISBNコード「{isbn}」のページです。</p>;
// }