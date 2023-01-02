function solution(price, money, count) {
    let total_pay = 0;
    for(let i =1; i<= count; i++){
        total_pay+=price*i
    }
    const difference = money-total_pay;
    return difference<0 ? Math.abs(difference): 0;
}