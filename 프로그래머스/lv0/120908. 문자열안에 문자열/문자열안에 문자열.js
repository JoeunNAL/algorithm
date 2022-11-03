function solution(str1, str2) {
    const parts = str1.split(str2);
    return (parts.length> 1)? 1: 2;
}