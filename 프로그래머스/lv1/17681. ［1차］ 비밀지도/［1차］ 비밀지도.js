function solution(n, arr1, arr2) {
    return arr1.map((el, idx)=>{
        const arr1String = el.toString(2);
        const arr2String = arr2[idx].toString(2);
        let combination = '';
    
        for(let i = 1 ; i <= n; i++ ){
            if(arr1String.at(-i) === '1' || arr2String.at(-i) === '1'){
                combination = '#' + combination;
            } else {
                combination = ' ' + combination;
            }
        }
        return combination;
    })
    
}