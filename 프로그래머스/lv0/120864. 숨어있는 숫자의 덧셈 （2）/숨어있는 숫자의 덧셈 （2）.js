function solution(my_string) {
    let sum = 0;
    my_string.split(/[a-z]/i).forEach(el=> !isNaN(Number(el))? sum+=Number(el):null)
    return sum
}