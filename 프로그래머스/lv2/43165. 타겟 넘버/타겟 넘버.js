function solution(numbers, target) {
    let answer = 0;
    
    for (let i = 0; i < 1 << numbers.length; i++) {
        let sum = 0;
        
        for (let j = 0; j < numbers.length; j++) {
            if ((i & (1 << j)) === 0) { 
                sum += numbers[j];
            } else { 
                sum -= numbers[j];
            }
        }
        if (sum === target) answer++;
    }
    
    
    
    return answer;
}