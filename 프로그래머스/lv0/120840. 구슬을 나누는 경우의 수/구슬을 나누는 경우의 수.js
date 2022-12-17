function factorial(number){
    if(number === 1){
        return 1
    }
    return number*factorial(number-1)
}

function solution(balls, share) {
    if(balls === share){
        return 1
    }
    const result = factorial(balls)/(factorial(balls-share)*factorial(share))
    return Math.round(result)
}
