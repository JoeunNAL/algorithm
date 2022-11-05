function solution(my_string) {
    const arr = my_string.split(' ');
    let result = +arr.at(0);
    for(let i = 1; i< arr.length; i+=2){
        (arr[i] ==="+")? result+= +arr[i+1]: result-= +arr[i+1]
    }
    return result;
}