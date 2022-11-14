function solution(num, k) {
    const location = num.toString().indexOf(`${k}`)
    return location>=0? location+1: location
}