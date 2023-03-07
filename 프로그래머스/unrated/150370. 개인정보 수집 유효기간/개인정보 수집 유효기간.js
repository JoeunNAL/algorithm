function solution(today, terms, privacies) {
    const [currentYear, currentMonth, currentDay] = today.split('.').map(el => +el);
    const currentGap = makeGapDays(currentYear,currentMonth,currentDay);
    
    // 만기 기한 조회용
    const dueDates = {};
    terms.forEach(el=>{
        const [key, value] = el.split(' ');
        dueDates[key] = +value;
    });
    
    return privacies.reduce((acc, cur, idx)=>{
        const [collectDate, termKey] = cur.split(' ');
        const [collectYear, collectMonth, collectDay] = collectDate.split('.').map(el => +el);
        const collectGap = makeGapDays(collectYear, collectMonth + dueDates[termKey], collectDay);
        
        if(collectGap <= currentGap){
            acc.push(idx+1);
        }
        return acc;
    },[]);
}

function makeGapDays (year, month, day) {
    return (year-2000)*12*28 + (month)*28 + day;
}