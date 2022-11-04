function solution(sides) {
    //     입력: 배열(두변의 길이)
    //     출력: 숫자(주어지지 않은 변의 개수)

    //     sides를 오름차순으로 정렬 => [a,b]
    //     result가 가장 큰 길이일때 => b < result < a+b => a개
    //     큰값이 아닐때 => b-a <= result< b => a-1개

    const [min, max] = sides.sort((a,b)=>a-b);
    return (2*min)-1;
}
