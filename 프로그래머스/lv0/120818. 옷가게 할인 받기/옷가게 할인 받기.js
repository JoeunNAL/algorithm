function solution(price) {
    const discounts = [[500000, 0.2], [300000,0.1],[100000,0.05]];
    let result = price;
    for(let discount of discounts){
        if(price>=discount[0]) {
            result = price*(1-discount[1]);
            break;
        }
    }
    return Math.floor(result);
}