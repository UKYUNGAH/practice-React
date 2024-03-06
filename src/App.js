import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// ============ 스테이트[a, b] 의미!
// a = 스테이트에 보관했던 자료 나옴
// b = 스테이트 변경 도화주는 함수!
// 변수는 갑자기 변경되면 자동으로 반영이 안됨 스테이트는 자동 재랜더링이 가능!
// 변동시 자동으로 html에 반영되게 하고싶을때 쓰면 좋음


// ========== let [logo, setLogo] = useState('ReactBlog');
// 로고같은건 자주 변경되지 않기 때문에 스테이트로 사용 안해도 됨
// 자주 변경될것같은 html 부분을 스테이트로 만들면 됨!

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
