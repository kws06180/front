// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let one = prompt('1차 점수 : '); // 1. 입력 2. 저장
let two = prompt('2차 점수 : ');
let sum = one + two ; // 3. 처리 (더하기), *대입연산자 기준으로 오른쪽 먼저 연산
let result = sum >= 150 ? '합격' : '불합격'; // 3. 처리(논리 : 조건찾기 = 총점이 150점 이상)
// 4. html 에 문자열 출력하기
// document.write( `<h3> 실습8 : ${ result } </h3>`); // `백틱 안에서 ${} 이용한 문자열과 연결 
document.querySelector('h3').innerHTML = `실습8 : ${ result }`; // html에 미리 h3 마크업 만들어야한다.

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let name1 = prompt( '첫번째 고객명 : ');
let name2 = prompt( '두번째 고객명 : ');
name1 += name1 == '유재석' ? '(방장)' : '' ;  // 논리 : 조건찾기 = 이름이 '유재석' 이면
name2 += name2 == '유재석' ? '(방장)' : '' ;
let result2 = ` <li> ${ name1 } </li>
                <li> ${ name2 } </li>`; // 연산은 인수에 따라 결과를 항상 다르게 반환된다.
document.querySelector('ol').innerHTML = result2;