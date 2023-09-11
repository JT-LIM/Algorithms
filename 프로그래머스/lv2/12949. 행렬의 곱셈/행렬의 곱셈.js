function solution(arr1, arr2) {
    var answer = [];
    
    for (var i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (var j = 0; j < arr2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = sum;
        }
    }
    
    return answer;
}