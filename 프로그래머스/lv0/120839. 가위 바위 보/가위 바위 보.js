function solution(rsp) {
/*
문자(숫자형)
문자(숫자형)

가위-2, 바위0, 보5
모두 이기는 경우의수

rsp를 순회하여 2이면 0을 이어 붙이고, 0이면 5를, 5면 2를 더해서 문자열을 반환한다.
*/
    
    return rsp.split("").map((el)=>{
        const target = parseInt(el,10);
        if(target === 2){
            return 0
        }
        if(target === 0){
            return 5
        }
        return 2
    }).join('')
    
    
}