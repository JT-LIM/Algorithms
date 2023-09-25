function solution(land) {
    var answer = 0;
        
    
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            let tmp = land[i - 1].slice();
            tmp[j] = 0;
            land[i][j] += Math.max(...tmp)
        }
    }
    
    return Math.max(...land[land.length - 1]);
}