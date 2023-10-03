function solution(record) {
    var answer = [];
    let users = new Map();
    
    record.forEach((log) => {
        let [action, userId, nickname] = log.split(" ");
       
        if (action === "Enter" || action === "Change") {
            users.set(userId, nickname);
        }
    });
    
    record.forEach((log) => {
        let [action, userId, _] = log.split(" ");
        
        if (action == "Enter") {
            answer.push(users.get(userId) + "님이 들어왔습니다.")
        } else if (action == "Leave"){
            answer.push(users.get(userId) + "님이 나갔습니다.")
        }
        
        
        
    })
    
    
    return answer;
}