function solution(files) {
    var answer = [];
    let list = [];
    
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        let startIndex = -1;
        let endIndex = -1;
        let head = '';
        for (let i = 0; i < file.length; i++) {
            if (file[i] >= '0' && file[i] <= '9') {
                if (startIndex === -1) {
                    head = file.substring(0, i).toLowerCase();
                    startIndex = i;
                }
                endIndex = i;
            } else if (startIndex !== -1) {
                break;
            }
        }
        const number = parseInt(file.substring(startIndex, endIndex + 1));
        list.push({ head, number, original: file, index});
    }
    
    list.sort((a, b) => {
        if (a.head < b.head) return -1;
        if (a.head > b.head) return 1;

        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1; 
        
        return a.index - b.index;
    });
    
    for (let data of list) {
        answer.push(data.original);
    }
    
    return answer;
}