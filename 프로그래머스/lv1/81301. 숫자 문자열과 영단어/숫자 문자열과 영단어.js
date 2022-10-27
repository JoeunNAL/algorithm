function solution(s) {
    // 영어 -> 숫자
    // 문자열 교체 방법
    // replaceAll 메서드
    // 반복문으로 split('') 배열화하여 인덱스 값 건너뛰기?
    
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let result = s;
    
    numArr.forEach((el,idx)=>{
        result = result.replaceAll(el, idx)
    })
    
    return Number(result);
    
    
}