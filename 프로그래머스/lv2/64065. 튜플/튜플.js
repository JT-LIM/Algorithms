function solution(s) {
    var answer = [];
    
    var sortedS = s.slice(2, -2).split("},{")
                    .map(item => item.split(",").map(Number))
                    .sort((a, b) => a.length - b.length)
    
    for (var arr of sortedS) {
        for (var num of arr) {
            if(!answer.includes(num)) {
                answer.push(num);
            }
        }
    }
    
    return answer;
}