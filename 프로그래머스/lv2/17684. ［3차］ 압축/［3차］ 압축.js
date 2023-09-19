function solution(msg) {
    let answer = [];
    let index = new Map();
    let indexKey = 26;
    
    for (let i = 1; i <= 26; i++) {
        index.set(String.fromCharCode(64 + i), i);
    }
    
    for (let i = 0; i < msg.length;) {
        let wc = msg[i];
        
        while (index.has(wc) && i < msg.length) {
            i++;
            wc += msg[i];
        }
        if (i === msg.length) {
            answer.push(index.get(wc.slice(0, -9)));
            break;
        } else {
            answer.push(index.get(wc.slice(0, -1)));
            indexKey++;
            index.set(wc, indexKey);
        }        
    }    
    
    return answer;
}