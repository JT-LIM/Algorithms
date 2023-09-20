function solution(fees, records) {
    let answer = [];
    let parkingDetails = {};
    
    records.forEach(record => {
        let [time, carNumber, status] = record.split(" ");
        if (!parkingDetails[carNumber]) {
            parkingDetails[carNumber] = [];
        }
        parkingDetails[carNumber].push({ time, status });
    });
    
    for (let car in parkingDetails) {
        if (parkingDetails[car].length % 2 !== 0) {
            parkingDetails[car].push({time: "23:59", status: "OUT"})
        }
    }

    let parkingTime = {};
    for (let car in parkingDetails) {
        parkingTime[car] = 0;
        for (let i = 0; i < parkingDetails[car].length; i += 2) {
            let hour = parkingDetails[car][i + 1].time.split(':')[0] - parkingDetails[car][i].time.split(':')[0];
            let min = parkingDetails[car][i + 1].time.split(':')[1] - parkingDetails[car][i].time.split(':')[1];
            parkingTime[car] += hour * 60 + min
        }
    }
    
    const sortedCar = Object.keys(parkingTime).sort();
    
    for(let num of sortedCar) {
        let time = parkingTime[num.toString()];
        let price = fees[1];
        if (time > fees[0]) {
            price += Math.ceil((time - fees[0]) / fees[2]) * fees[3];
        }
        answer.push(price)
    }
    
    
    return answer;
}