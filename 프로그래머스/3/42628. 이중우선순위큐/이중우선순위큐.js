function solution(operations) {
    var answer = [];
    let queue = [];
    
    for (let operation of operations) {
        const [command, value] = operation.split(' ');
        if (command == 'I') {
            queue.push(value);
            queue.sort((a, b) => a - b);
        } else if (value === '1') {
            queue.pop();
        } else {
            queue.shift();
        }
    };
    
    if (queue.length == 0) return [0, 0]
    
    return [Number(queue[queue.length - 1]), Number(queue[0])];
}