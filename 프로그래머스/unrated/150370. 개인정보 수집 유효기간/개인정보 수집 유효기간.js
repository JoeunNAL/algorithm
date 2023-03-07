function solution(today, terms, privacies) {
    const [currentYear, currentMonth, currentDay] = today.split('.').map(el => +el);
    const currentGap = makeGapDays(currentYear,currentMonth,currentDay);
    
    terms = terms.map(el=>{
        const arr = el.split(' ');
        arr[1] = +arr[1];
        return arr;
    });
    
    return privacies.reduce((acc, cur, idx)=>{
        const [collectDate, termKey] = cur.split(' ');
        const [collectYear, collectMonth, collectDay] = collectDate.split('.').map(el => +el);
        
        const termDate = terms.filter(el => el[0] === termKey)[0][1];
        const collectGap = makeGapDays(collectYear, collectMonth+termDate, collectDay);
        if(collectGap <= currentGap){
            acc.push(idx+1);
        }
        return acc;
    },[]);
}

function makeGapDays (year, month, day) {
    return (year-2000)*12*28 + (month)*28 + day;
}