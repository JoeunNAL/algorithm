function solution(id_pw, db) {
// db에서 0번째 인덱스가 id_pw의 0번째 요소가 같은 것을 찾는다.
// 찾은 값의 1번째 요소를 비교하여 결과를 반환한다.
    const target = db.find((el)=>el[0]===id_pw[0]);
    if(target){
        return target[1] ===id_pw[1]? "login": "wrong pw";
    } else {
        return "fail"
    }
}