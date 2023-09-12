function solution(cacheSize, cities) {
    var answer = 0;
    var cache = [];
    
    for (var city of cities) {
        city = city.toLowerCase();
        var idx = cache.indexOf(city);
        if (idx !== -1) {
            cache.splice(idx, 1);
            cache.unshift(city);
            answer += 1;
        } else {
            if (cache.length === cacheSize) {
                cache.pop();
            }
            if (cacheSize > 0){
            cache.unshift(city);}
            answer += 5;
        }
    }
    
    return answer;
}