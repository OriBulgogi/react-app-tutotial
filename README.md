# 코딩애플 강의정리
- JSX   
  1. return 안의 html 태그를 js에서 사용하는 문법 div class 가 아닌이유는 js class 와 겹치기때문
  2. 변수넣을 땐 {} 
  3. style={{스타일명 : '값'}}, 스타일명은 camelcase 작성, 중간에 '-' 은 js에서 마이너스 연산으로 인식함 

- 리액트 문법
  1. return() 안에는 병렬로 태그 2개 이상 기입금지
  2. useState
    일반 변수는 갑자기 변경되면 반영이 안된다.   
    State 는 값이 변경시 html 리렌더링이 자동으로 된다.   
    => 자주변경될거같은 부분에 사용한다.   
  3. 등호(=) 사용 금지   
      ```
      let num = [1,2];
      let a = num[0];
      let C = num[1];
      let [a, c] = [1, 2]  -> JS의 Destructuring 문법 useState에 활용하는것
      ```
- state 변경함수 특징   
    기존 state == 신규 state 의 경우 변경안해줌.   

- array/object 특징

      let arr = [1,2,3];   
      js도 arr/object 는 값의 주소가 저장된다.   

      let arr1 = arr2;   
      arr2[0] = 다른값;   
      setState(arr2);   
      => 리랜더링 x, 왜냐하면 arr1, arr2 은 reference 가 똑같으므로 기존 state == 신규 state 라고 판단하기 때문에 변경 안해줌;   

- component 언제 쓸까   
    (1) 반복적인 html 축약   
    (2) 큰 페이지를 component 단위로   
    (3) 자주변경되는 것들   
