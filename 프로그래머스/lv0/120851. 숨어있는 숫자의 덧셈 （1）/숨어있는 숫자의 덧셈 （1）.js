function solution(my_string) {
    return my_string.split('').reduce((acc,cur)=>{
        return !isNaN(Number(cur))? acc+Number(cur): acc 
    },0)
}