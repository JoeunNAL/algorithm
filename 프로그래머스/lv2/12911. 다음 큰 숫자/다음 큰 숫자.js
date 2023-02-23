function solution(n) {
    const binery = n.toString(2);
    const lastIndex = binery.length-1;
    let targetIndex = -1; 
    
    for(let i = lastIndex; i >= 0; i--){
        if(binery[i] === '0' && binery[i+1] === '1'){
            targetIndex = i;
            break;
        }
    }
    
    let before;
    if(targetIndex === -1){
        before= "";
    } else{
        before= binery.slice(0,targetIndex);
    }
    
    const arr = [];
    for(let i = targetIndex+2; i<= lastIndex ; i++){
        arr.push(binery[i]);
    }
    const oneCount = arr.filter(el => el === '1').length;
    const after= '0'.repeat(arr.length - oneCount) + '1'.repeat(oneCount);
    
    return parseInt(before +'10'+ after,2); 
}