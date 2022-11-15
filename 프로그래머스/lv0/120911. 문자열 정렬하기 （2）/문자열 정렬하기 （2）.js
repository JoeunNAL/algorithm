function solution(my_string) {
    const lowerString = my_string.toLowerCase()
    return lowerString.split('').sort().join('')
}