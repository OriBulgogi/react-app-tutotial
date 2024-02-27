
//eslint-disable warning ->message 없애는거
import { useState } from 'react';
import './App.css';


function Article(props){
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}


function Header(props){
  console.log('props', props, props.title);
  return(
    <header>
      <h1><a href="/" onClick={event=>{
        event.preventDefault(); //a 태그가 동작하는 기본 동작을 방지한다. -> click해도 리로드x
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header> //onclick은 예약어, onClick은 유사 html?, camel case로 쓰는 유사 html 예약어가 있나봄
  );
}

function Nav(props){
  const lis= []

  for(let i =0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
              <a id={t.id} href={'/read/'+t.id} onClick={event=>{
                event.preventDefault();
                props.onChangeMode(event.target.id);
              }}>{t.title}</a>
            </li>)
  } 
  //리액에선 동적으로 생성된 태그에는 unique Key 가 필요하다.
  return <nav>
      <ol>
        {lis} 
      </ol>
    </nav>
}


/*
-JSX 
1. return 안의 html 태그를 js에서 사용하는 문법 div class 가 아닌이유는 js class 와 겹치기때문
2. 변수넣을 땐 {} 
3. style={{스타일명 : '값'}}, 스타일명은 camelcase 작성, 중간에 '-' 은 js에서 마이너스 연산으로 인식함 

-리액트 문법
 1. return() 안에는 병렬로 태그 2개 이상 기입금지
 2. useState
  일반 변수는 갑자기 변경되면 반영이 안된다.
  State 는 값이 변경시 html 리렌더링이 자동으로 된다.
  => 자주변경될거같은 부분에 사용한다.

  등호(=) 사용 금지
  ex)
  let num = [1,2]; let a = num[0];  let C = num[1]; 
  let [a, c] = [1, 2]  -> JS의 Destructuring 문법 useState에 활용하는것
3. state 변경함수 특징
  기존 state == 신규 state 의 경우 변경안해줌.
4. array/object 특징
  let arr = [1,2,3];
  js도 arr/object 는 값의 주소가 저장된다.
  그래서
  let arr1 = arr2; 
  arr2[0] = 다른값; 
  setState(arr2);
  해도 변경안됨

  왜냐하면 arr1, arr2 은 reference 가 똑같으므로 기존 state == 신규 state 라고 판단하기 때문에 변경 안해줌;
-onClick
  onClick{함수명}

5. component 언제 쓸까
  (1) 반복적인 html 축약
  (2) 큰 페이지를 component 단위로
  (3) 자주변경되는 것들

 */
 
function App() {
  let post='강남 우동 맛집';
  let  [recomend,setRecomend]= useState(['남자 코트 추천','여자 코트 추천','바보 코트추천']);
  let [like, setLike] = useState(0);
  
  return (
    <div className="App"> 
      <div className='black-nav'>
        <h4 >React blog</h4>
      </div>
      {/** 
       * arry/object 를 다룰 때 원본은 보존하는게 좋음. 
       * 
      */}
 
      <button onClick={() => {
        let copy = [...recomend];
        copy[0] = '여자 코트 추천'; 
        setRecomend(copy);
      }}>
        이름 변경
      </button>
      <button onClick={()=>{
        let copy = [...recomend];
        copy.sort();
        setRecomend(copy);
      }}>
        가나다순정렬
      </button>

      <div className='list'>
        <h4>{recomend[0]} <span onClick={() => {setLike(like++)}}>  👍</span> {like} </h4>
        {/*<h4>{recomend[0]} <span onClick={() => {nomalVariable++; console.log(nomalVariable)}}>  👍</span> {nomalVariable} </h4> 
         => 리 렌더링 안됨, useState 는 됨.

        */}
        <p>2월 27일 발행</p>
      </div>
      <div className='list'>
        <h4>{recomend[1]}</h4>
        <p>2월 27일 발행</p>
        
      </div>
      <div className='list'>
        <h4>{recomend[2]}</h4>
        <p>2월 27일 발행</p>
      </div>
        <Modal></Modal> 
    </div>
  );
}


function Modal() {
  return (
  <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}
export default App;

