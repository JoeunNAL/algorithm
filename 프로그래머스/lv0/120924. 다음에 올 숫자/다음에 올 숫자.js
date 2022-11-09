function solution(common) {
    const length = common.length;
    const firstGap = common[1]-common[0]
    const lastGap = common.at(-1)- common.at(-2)
    // 등차
    if(firstGap === lastGap){
        return common.at(-1)+firstGap
    }
    // 등비
    const rate = common.at(-1)/common.at(-2)
    return common.at(-1)*rate
}