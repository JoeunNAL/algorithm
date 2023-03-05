function solution(wallpaper) {
    const xIndex=[];
    const yIndex=[];
    
    wallpaper.forEach((el, idx)=>{
        const firstIdx = el.indexOf('#');
        const lastIdx = el.lastIndexOf('#');
        
        if(firstIdx !== -1){
            xIndex.push(idx);
            yIndex.push(firstIdx, lastIdx);
        }
    });
    
    return [Math.min(...xIndex), Math.min(...yIndex), Math.max(...xIndex) +1, Math.max(...yIndex) +1];
}