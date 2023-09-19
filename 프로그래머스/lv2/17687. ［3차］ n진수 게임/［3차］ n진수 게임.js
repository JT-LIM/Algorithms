function solution(n, t, m, p) {
    let answer = '';
    let maxNum = t * m;
    let str = ''
    
    for (let i = 0; i < maxNum; i++) {
        str += i.toString(n)
    }
    
    for (let i = p - 1; i < maxNum; i += m) {
        answer += str[i].toUpperCase();
    }
    
        
    return answer;
}