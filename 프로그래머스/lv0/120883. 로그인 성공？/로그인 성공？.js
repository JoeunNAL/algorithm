function solution(id_pw, db) {
// 입력:배열, 2차원배열
// 출력:문자열(로그인 성공여부  "login", “fail”, “wrong pw”)
//     db의 각 요소에서 0번째 인덱스 값과, id_pw 의 0번째 값이 같은경우
//     -> 1번째 값을 비교-> 같으면 login 리턴
//                    -> 아니면  “wrong pw” 리턴
//     db의 각 요소에서 0번째 인덱스 값과, id_pw 의 0번째 값이 다른경우 
//     -> 다음 검색
//     
    let result = "fail";
    for(let el of db){
        (el[0] !== id_pw[0])? null : el[1] ===id_pw[1]? result ="login" :result ="wrong pw";
    }
    return result;
}