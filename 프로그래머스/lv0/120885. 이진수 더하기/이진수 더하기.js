function solution(bin1, bin2) {
    const sum = parseInt(bin1,2)+ parseInt(bin2,2)
    return sum.toString(2)
}

// 이진법 구하는 함수
// function getBineryString(target, num=10){
//     let result="";

//     while(target>0){
//         result = target%num + result;
//         target = Math.floor(target/num);
//     }
//     return result;
// }
