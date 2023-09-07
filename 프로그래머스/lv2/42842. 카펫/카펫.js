function solution(brown, yellow) {
    var answer = [];
    
    y = parseInt((brown + 4) / 2 / 2)
    x = (brown + 4) / 2 - y
    for(var i = y; y > 0; y--) {
        if((x - 2) * (y - 2) == yellow) {
            return [x, y];
        }
        x++;
    }
    
    
    
    return answer;
}