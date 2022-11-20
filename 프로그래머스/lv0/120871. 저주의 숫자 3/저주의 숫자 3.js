function solution(n) {
    let result = 0;
    while(n>0){
        result++
        if(result%3 ===0 || result.toString().includes('3')){
           continue;
        }
        n--
    }
    return result;
}

// function solution(n) {
//     let result = 0;
//     for(let i = 0; i<n; i++ ){
//         result++
//         while(result%3 === 0 || result.toString().includes('3')){
//             result++
//         }
//     }
//     return result;
// }
