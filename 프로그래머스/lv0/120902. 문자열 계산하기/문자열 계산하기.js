function solution(my_string) {
    const arr = my_string.split(' ');
    let result = +arr.at(0);
    for(let i = 1; i< arr.length; i+=2){
        (arr[i] ==="+")? result+= +arr[i+1]: result-= +arr[i+1]
    }
    return result;
}

// 테스트케이스 "23 + 3 - 1"
//     공백을 기준으로 분리한다.
//     0번첫번째 값을 반환할 값에 할당한다.
//     분리한 배열을 1번째 인덱스부터 순회한다(2씩 증가)
//     i가 홀수인 경우(기호) +라면 다음 숫자를 더한다. 아니면 뺀다.
