function solution(array) {
    return array.join('').replaceAll(/[^7]/g, '').length
    
    /*
    입력: 배열
    출력: 숫자
    
    반환 값 result를 0으로 초기화한다.
    모든 요소를 합친 문자열을 각 문자별로 나눠 배열화 한다.
    반복문으로 요소가 '7'이면 카운팅한다.
    // let result = 0;
    // array.join('').split('').forEach((el)=>{
    //     el=== '7'? result++: null;
    // }) 
    // return result;
    */
}
