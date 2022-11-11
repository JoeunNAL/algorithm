function solution(array) {
    return array.join('').replaceAll(/[^7]/g, '').length
}