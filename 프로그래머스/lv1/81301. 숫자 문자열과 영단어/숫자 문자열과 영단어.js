function solution(s) {
    // 영어 -> 숫자
    // 문자열 교체 방법
    // replaceAll 메서드
    // 특정 문자열 기준으로 split 후 join
    
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let result = s;
    
    numArr.forEach((el,idx)=>{
        const splitByNum = result.split(el);
        result = splitByNum.join(idx);
    })
    
    return Number(result);
    
    
}