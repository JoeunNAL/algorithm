function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"];
    const myStringArr = my_string.split('');
    const result = myStringArr.filter((char)=>
        vowel.indexOf(char) === -1
    ).join("")
    return result;
}