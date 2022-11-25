function solution(my_string) {   
    let result ="";
    for(let i of my_string){
        result.includes(i)? null: result+=i;
    }
    return result
}