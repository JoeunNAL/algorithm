function solution(sizes) {
    let maxWidth =0;
    let maxHeight =0;
    sizes.forEach((el)=>{
        let [width, height]=[...el].sort((a,b)=>b-a)
        if(maxWidth<width) maxWidth = width;
        if(maxHeight<height) maxHeight=height;
    })
    return maxWidth*maxHeight
}