function solution(sizes) {
    const [maxWidth, maxHeight] = sizes.reduce(([w,h],[cw, ch])=>[Math.max(w, Math.max(cw,ch)),Math.max(h, Math.min(cw,ch))],[0,0])
    return maxWidth* maxHeight
}