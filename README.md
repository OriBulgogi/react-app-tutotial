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


  # 부록 : ES6 헷갈리는거
  - this  
      1-1. 그냥 쓰거나 함수 안에서 쓰면 this는 window(모든 전역변수, 함수, DOM을 보관하고 관리하는 전역객체) 를 뜻한다.  
      1-2. stric mode일 때 함수 안에서 쓰면 this는 undefined
    ```
    <script>
      'use strict';
    
      function 간지나는함수(){
        console.log(this)
      }
      간지나는함수();
      
    </script>
    strict mode에선 var 과 같은 선언문없이 변수를 선언하거나 변수를 argumetns라는 이상한 키워드로 선언하거나 그런 실수를 방지해준다.
    strict mode에선 this 키워드를 일반함수 안에서 불렀을 때 undefined라는 값으로 강제로 지정해줍니다.
    ```
    2-1. object 자료형 내의 함수에서 this 값은 현재 object를 지칭함  
    --> 사실상 이 내용이 1-1과 똑같음, 전역 영역에서 this를 호출하면 window라는 전역 object가 나오는거  

    3-1. constructor instance (자바랑 같음)  
    ```
    var 어쩌구 = {}
    function 기계(){
      this.이름 = 'Kim' //새로 생성되는 오브젝트(instance)
    }
    var 오브젝트 = new 기계();
    ```

    4-1. 이벤트리스너 안에서는 e.currentTarget
      + arrow function 특징 : 내부의 this값을 변화시키지 않음 (외부 this 값 그대로 재사용가능)
      + 즉 arrow function 내의 this 는 상위 object를 물려 받음
    ```
    <div></div>
    <button id="버튼">버튼<button>
    <script>
    document.getElementById('버튼').addEventListener('click'. function(e){
      console.log(this); 
      console.log(e.currentTaget);
      //동일, window

      var 어레이 = [1,2,3];
      어레이.forEach(function(a){
        console.log(this); //window
      });
    })


    var 오브젝트 ={
      이름들 : ['김','이','박'],
      함수 : function(){
        console.log(this)  // "오브젝트" 를 출력
        오브젝트.이름들.forEach(function(){ // function() 을 () => :arrow function 으로 바꾸면 아래의 this도 "오브젝트"를 출력
          console.log(this);//window 출력
      })
     }
    }
    오브젝트.함수();
    
    ```


    
  
