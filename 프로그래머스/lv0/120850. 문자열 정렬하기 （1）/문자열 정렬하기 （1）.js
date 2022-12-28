function solution(my_string) {
    const result=[];
    for(let char of my_string){
        const toNumber = Number(char);
        !isNaN(toNumber) ? result.push(toNumber) : null;
    }
    return result.sort();
}