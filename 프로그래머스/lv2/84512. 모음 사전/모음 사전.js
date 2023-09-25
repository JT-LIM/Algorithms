function solution(word) {
    let answer = 0;
    
    const arr = ['A', 'E', 'I', 'O', 'U'];
    const wordSize = word.length;
    const one_rotation = 1 + 5 + 5*5 + 5*5*5 + 5*5*5*5
    const rotaion = [1 , 5, 5*5, 5*5*5, 5*5*5*5]
    
    
    for (let i = 0; i < word.length; i++) {
        const idx = arr.indexOf(word[i]);
        let tmp = 0;
        for (let j = 4 - i; j >= 0; j--) {
            tmp += rotaion[j];
        }
        answer += tmp * idx + 1
        
    }
    
    
            
    
    return answer;
}