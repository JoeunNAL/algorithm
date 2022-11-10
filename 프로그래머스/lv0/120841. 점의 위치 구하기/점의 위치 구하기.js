function solution(dot) {
    if(dot[1]>0){
        return (dot[0]>0)? 1:2;
    }
    return (dot[0]>0)? 4:3;
}