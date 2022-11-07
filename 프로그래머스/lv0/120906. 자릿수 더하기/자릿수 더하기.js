function solution(n) {
// 입력: 숫자
// 출력: 숫자
    
// 숫자를 문자열로 변환 후 배열로 바꾼다.
// 반복문으로 모든 요소를 더하고 그 값을 반환한다.
    let result =0;
    const numArr = n.toString().split('');
    numArr.forEach((el)=>{
        result += +el;
    })
    return result;
}