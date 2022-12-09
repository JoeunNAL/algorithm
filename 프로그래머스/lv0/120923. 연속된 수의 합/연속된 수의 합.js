function solution(num, total) {
    //     숫자, 숫자
    //     배열(오름차순 정렬,연속된 수 num개를 더한 값이 total이 될 때) : 음수 포함될 수도있음

    //     넘버가 홀수의 경우 total/number가 중앙값.
    //     짝수의 경우 나눈값에서 14/4 = 3, 나머지 2 
    //      -> 짝수의 경우 중앙값이 왼쪽으로 쏠려있으므로 +1을 해야한다.

    //     길이가 number인 배열을 시작값으로 채운다. 
    //          가운데 값에서 number를 2로 나눈 몫만큼 제외한 값
    //     요소에 인덱스 값을 더하여 오름차순으로 만든다.
    //     number가 양수라면 요소 전체에 +1을 더한다. 
    
    const fillWithStartNumber = new Array(num).fill(parseInt(total/num)-parseInt(num/2))
    return fillWithStartNumber.map((el, idx)=>{
       return (num%2 ===0)?el+idx+1:el+idx;
    })
}
