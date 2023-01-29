function solution(lottos, win_nums) {
    const results = {
        2 : 5,
        3 : 4,
        4 : 3,
        5 : 2,
        6 : 1,
    }
    const zeroCount = lottos.filter(el => el === 0).length;
    const matchCount = win_nums.filter(el => lottos.includes(el)).length;
    return [results[matchCount+zeroCount] || 6, results[matchCount] || 6]
}