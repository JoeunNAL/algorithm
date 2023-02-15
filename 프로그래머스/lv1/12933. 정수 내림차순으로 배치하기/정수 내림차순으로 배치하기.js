function solution(n) {
    const string = String(n).split('').sort((a,b)=>b-a).join('');
    return Number(string)
}