function solution(emergency) {
    const urgencys = [...emergency].sort((a,b)=>b-a)
    return emergency.map((el)=> urgencys.indexOf(el)+1)
}