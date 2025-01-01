// export default function AboutPage() {
//   return (
//     <>
//       <p>About 페이지입니다.</p>
//     </>
//   );
// }



// Code 8-2-15
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  // navigate 함수 가져오기
  const navigate = useNavigate();
  // 홈페이지로 이동
  const handleClick = () => navigate('/');

  return (
    <>
      <p>About 페이지입니다.</p>
      <button type="button" onClick={handleClick}>
        홈으로 이동</button>
    </>
  );
}