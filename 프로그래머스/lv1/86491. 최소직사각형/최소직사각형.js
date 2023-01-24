function solution(sizes) {
    const maxs = [];
    const mins = [];
    sizes.forEach(([left, right]) => {
        maxs.push(Math.max(left,right));
        mins.push(Math.min(left,right));
    })
    return Math.max(...maxs) * Math.max(...mins);
}