function solution(x, y, n) {
    var answer = 0;
    let queue = [{value: y, layer: 0}];
    let visited = new Set();
    
    if(x === y) return 0;
    while(queue.length > 0) {
        let curr = queue.shift();
        
        if (curr.value === x) return curr.layer;

        if (curr.value - n >= x && !visited.has(curr.value - n)) {
            queue.push({value: curr.value - n, layer: curr.layer + 1});
            visited.add(curr.value - n);
        }
        if (curr.value % 2 === 0 && !visited.has(curr.value / 2)) {
            queue.push({value: curr.value / 2, layer: curr.layer + 1});
            visited.add(curr.value / 2);
        }
        if (curr.value % 3 === 0 && !visited.has(curr.value / 3)) {
            queue.push({value: curr.value / 3, layer: curr.layer + 1});
            visited.add(curr.value / 3);
        }
        
    }
    
    return -1;
}