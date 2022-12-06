function solution(my_string) {
    let result='';

    const lowerCases = my_string.toLowerCase();
    for(let i =0; i<my_string.length;i++){
        result+= (my_string[i] === lowerCases[i])?
            my_string[i].toUpperCase()
            : my_string[i].toLowerCase();
    }
    return result;
}