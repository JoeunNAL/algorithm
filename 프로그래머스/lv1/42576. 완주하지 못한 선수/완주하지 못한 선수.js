function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.filter((el,idx)=> el!==completion[idx])[0];
}