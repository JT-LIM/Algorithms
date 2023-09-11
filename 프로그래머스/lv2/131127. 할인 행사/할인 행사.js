function solution(want, number, discount) {
    var answer = 0;
    
    for (var start = 0; start < discount.length - 9; start++) {
        var count = number.slice();
        
        for (var day = start; day < start + 10; day++) {
            
            var index = want.indexOf(discount[day]);
            if (index !== -1 && number[index] > 0) {
                count[index] -= 1;
            } 
            
            if (day === start + 9) {
                if (count.every(count => count <= 0)) {
                    answer++;
                }
            }
 
        }
    }
    
    return answer;
}